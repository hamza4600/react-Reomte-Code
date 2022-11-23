import React, { useContext, useEffect, useRef, useState } from "react";
import {
  useMarkAsRead,
  useGetConvoMessages,
  useGetTotalChatCount,
  useGetPollingMessages,
} from "hooks";
import withApolloProvider from "hooks/apollo/withApollo";
import { MessageResponse } from "@remotebase/amplify-constants/API";
import { ProfileContext, ProfileContextType } from "state/profileSteps";
import { CurrentChatProps } from "utils";
import { clone, reverse } from "lodash";
import { ChatContextType } from "state/types/chatTypes";
import { ChatContext } from "./chat.context";
import { getReadBy, scrollToEnd } from "./chat.helper";

interface HocProps {
  conversationId?: string;
}

const SUBSCRIPTION_LIMIT = 99;
const POLL_INTERVAL = 5000;
const MESSAGE_FETCH_LIMIT = 30;
const SCROLL_TIMEOUT = 200;

export function withCurrentUserChat<T>(
  Component: React.FC<T & HocProps & CurrentChatProps>,
): React.FC<T & HocProps> {
  return withApolloProvider((props: T & HocProps) => {
    const { conversationId } = props;
    const chatBoxRef = useRef<HTMLDivElement | null>(null);
    const [firstCall, setFirstCall] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const {
      profileState: { data },
    } = useContext<ProfileContextType>(ProfileContext);
    const [isPoll, setIsPoll] = useState(false);
    const { recentMessages, setRecentMessages } = useContext<ChatContextType>(ChatContext);
    const [chatMessages, setChatMessages] = useState<Array<MessageResponse | null>>([]);
    const [totalChatMessages, setTotalChatMessages] = useState(0);
    const { nextToken, getMessages, loading, data: messageData } = useGetConvoMessages();
    const {
      getMessages: getPollingMessages,
      loading: pollingLoading,
      data: polledData,
      startPolling,
      stopPolling,
    } = useGetPollingMessages();
    const { getTotalMsgCount, data: messageCount } = useGetTotalChatCount();
    const { markAsRead, data: markAsReadRes } = useMarkAsRead();

    const updateRecentMessage = (message: MessageResponse | null, convoId?: string): void => {
      const index = recentMessages.findIndex(
        (item) => item.conversationId === message?.conversationId,
      );
      const isRead = message ? getReadBy(message, data?.id || "") : true;
      if (index > -1) {
        const newState = clone(recentMessages);
        newState[index] = {
          conversationId: message?.conversationId || convoId || "",
          message,
          isReadConversation: isRead,
        };
        setRecentMessages(newState);
      } else {
        setRecentMessages((previous) => [
          ...previous,
          {
            conversationId: message?.conversationId || convoId || "",
            message,
            isReadConversation: isRead,
          },
        ]);
      }
    };

    const fetchMessages = (token: string | null): void => {
      if (conversationId)
        getMessages({
          variables: {
            input: { conversationId, nextToken: token, limit: MESSAGE_FETCH_LIMIT },
          },
        });
    };

    const fetchMore = (): void => {
      if (!loading && !isLoading && nextToken?.length) {
        setIsLoading(true);
        fetchMessages(nextToken);
      }
    };

    const markConvoAsRead = (messageId: string): void => {
      markAsRead({
        variables: {
          input: { messageId },
        },
      });
    };

    const markMessageAsRead = (message: MessageResponse | null): void => {
      const index = recentMessages.findIndex((item) => item.conversationId === conversationId);
      if (index > -1) {
        const newState = clone(recentMessages);
        newState[index] = {
          conversationId: conversationId || "",
          message,
          isReadConversation: true,
        };
        setRecentMessages(newState);
      }
    };

    const resetStates = (): void => {
      setChatMessages([]);
      setIsLoading(true);
      setFirstCall(true);
      setTotalChatMessages(0);
      setIsPoll(false);
    };

    const updateSubscribedMessage = (newMessage: MessageResponse): void => {
      if (newMessage.senderInfo?.id !== data?.id) {
        setTotalChatMessages((prev) => prev + 1);
        setChatMessages([...chatMessages, newMessage]);
        updateRecentMessage(newMessage);
        setTimeout(() => scrollToEnd(chatBoxRef), SCROLL_TIMEOUT);
      } else {
        const index = chatMessages.findIndex((item) => item?.content === newMessage.content);
        const newState = clone(chatMessages);
        newState[index] = newMessage;
        setChatMessages(newState);
      }
    };

    const updateLocalMessage = (localMessage: MessageResponse | null): void => {
      setTotalChatMessages((prev) => prev + 1);
      setChatMessages([...chatMessages, localMessage]);
      markMessageAsRead(localMessage);
      setTimeout(() => scrollToEnd(chatBoxRef), SCROLL_TIMEOUT);
    };

    const getUpdatedChatMessages = (
      updatedData: Array<MessageResponse | null>,
    ): Array<MessageResponse | null> => {
      let currentChatMessages = clone(chatMessages);
      if (isPoll && currentChatMessages.length) {
        const lastMessageWithId = reverse([...currentChatMessages]).find(
          (e) => e?.id !== undefined,
        ); // find first occurrence message in chat where id is not undefined
        if (lastMessageWithId) {
          // find index where we have to cut messages
          const updatedIndexToCut = updatedData.findIndex((e) => e?.id === lastMessageWithId.id);
          updatedData.splice(0, updatedIndexToCut + 1);
          const otherUpdatedMessages = updatedData.filter(
            (item) => item?.senderInfo?.id !== data?.id,
          ); // Our messages  removed from updated data
          if (otherUpdatedMessages.length) {
            // we need to sort later on when required on the basis of created At
            currentChatMessages = [...currentChatMessages, ...otherUpdatedMessages];
            updateRecentMessage(otherUpdatedMessages.at(-1) || null);
            setTimeout(() => scrollToEnd(chatBoxRef), SCROLL_TIMEOUT);
          }
        }
      }
      return currentChatMessages;
    };

    useEffect(() => {
      if ((chatMessages.length || nextToken === null) && firstCall) {
        setFirstCall(false);
        const lastMsg = chatMessages[chatMessages.length - 1];
        if (lastMsg) updateRecentMessage(lastMsg);
        scrollToEnd(chatBoxRef);
      }
    }, [chatMessages, firstCall]);

    useEffect(() => {
      if (conversationId && recentMessages.length) {
        const currentMessage = recentMessages.find((msg) => msg.conversationId === conversationId);
        const { isReadConversation, message } = currentMessage || {};
        if (isReadConversation === false && message?.id) markConvoAsRead(message.id);
      }
    }, [recentMessages, conversationId]);

    useEffect(() => {
      if (!loading && messageData && isLoading) {
        const updatedData = reverse([...messageData]);
        setIsLoading(false);
        setChatMessages([...updatedData, ...chatMessages]);
      }
    }, [messageData, loading]);

    useEffect(() => {
      if (!pollingLoading && polledData) {
        const updatedData = reverse([...polledData]);
        setChatMessages(getUpdatedChatMessages(updatedData));
      }
    }, [polledData, pollingLoading]);

    useEffect(() => {
      if (markAsReadRes) markMessageAsRead(markAsReadRes);
    }, [markAsReadRes]);

    useEffect(() => {
      if (isPoll && conversationId)
        setTimeout(() => {
          const variables = {
            input: { conversationId, nextToken: null, limit: MESSAGE_FETCH_LIMIT },
          };
          getPollingMessages({ variables });
          startPolling?.(POLL_INTERVAL);
        }, POLL_INTERVAL);
      return (): void => {
        if (isPoll) stopPolling?.();
      };
    }, [isPoll]);

    useEffect(() => {
      if (totalChatMessages > SUBSCRIPTION_LIMIT) {
        setIsPoll(true);
      }
    }, [totalChatMessages]);

    useEffect(() => {
      setTotalChatMessages(messageCount?.count || 0);
    }, [messageCount]);

    useEffect(() => {
      if (conversationId) {
        resetStates();
        getTotalMsgCount({ variables: { input: { conversationId } } });
        fetchMessages(null);
      }
    }, [conversationId]);

    const chatProps = {
      chatMessages,
      hasMoreData: firstCall || !!nextToken?.length,
      recentMessages,
      chatBoxRef,
      fetchMore,
      updateLocalMessage,
      updateSubscribedMessage,
      updateRecentMessage,
    };

    return <Component {...props} {...chatProps} />;
  });
}
export default withCurrentUserChat;
