import { useLazyQuery, useMutation } from "@apollo/client";
import {
    getConversationsByParticipant,
    getMessagesByConversation,
    getMessagesCountByConversationId,
} from "@remotebase/amplify-constants/graphql/queries";
import { getQuery } from "hooks/utils/helpers";
import {
    UseGetTalentChatProps,
    UseSendMessageProps,
    UseGetConvoMessageProps,
    UseMarkAsReadProps,
    UseGetTotalCountProps,
} from "hooks/types";
import {
    GetConversationsByParticipantQuery,
    GetConversationsByParticipantQueryVariables,
    SendMessageMutation,
    SendMessageMutationVariables,
    GetMessagesByConversationQueryVariables,
    GetMessagesByConversationQuery,
    MarkMessageAsReadMutationVariables,
    MarkMessageAsReadMutation,
    GetMessagesCountByConversationIdQuery,
    GetMessagesCountByConversationIdQueryVariables,
} from "@remotebase/amplify-constants/API";
import { markMessageAsRead, sendMessage } from "@remotebase/amplify-constants/graphql/mutations";

export const useGetTalentChatList = (): UseGetTalentChatProps => {
    const [getTalentConversation, { data, loading, error }] = useLazyQuery<
        GetConversationsByParticipantQuery,
        GetConversationsByParticipantQueryVariables
    >(getQuery(getConversationsByParticipant));
    const res = data?.getConversationsByParticipant?.data || null;
    return {
        getTalentConversation,
        data: res,
        loading,
        error,
    };
};

export const useSendMessage = (): UseSendMessageProps => {
    const [sendNewMessage, { data, loading, error }] = useMutation<
        SendMessageMutation,
        SendMessageMutationVariables
    >(getQuery(sendMessage));
    const res = data?.sendMessage?.data || null;
    return {
        sendNewMessage,
        data: res,
        loading,
        error,
    };
};

export const useGetConvoMessages = (): UseGetConvoMessageProps => {
    const [getMessages, { data, loading, error }] = useLazyQuery<
        GetMessagesByConversationQuery,
        GetMessagesByConversationQueryVariables
    >(getQuery(getMessagesByConversation));
    const res = data?.getMessagesByConversation?.data || null;
    const nextToken = data?.getMessagesByConversation?.nextToken;
    return {
        getMessages,
        data: res,
        loading,
        error,
        nextToken,
    };
};

export const useGetPollingMessages = (): UseGetConvoMessageProps => {
    const [getMessages, { data, loading, error, startPolling, stopPolling }] = useLazyQuery<
        GetMessagesByConversationQuery,
        GetMessagesByConversationQueryVariables
    >(getQuery(getMessagesByConversation));
    const res = data?.getMessagesByConversation?.data || null;
    const nextToken = data?.getMessagesByConversation?.nextToken || null;
    return {
        startPolling,
        stopPolling,
        getMessages,
        data: res,
        loading,
        error,
        nextToken,
    };
};

export const useMarkAsRead = (): UseMarkAsReadProps => {
    const [markAsRead, { data, loading, error }] = useMutation<
        MarkMessageAsReadMutation,
        MarkMessageAsReadMutationVariables
    >(getQuery(markMessageAsRead));
    const res = data?.markMessageAsRead?.data || null;
    return {
        markAsRead,
        data: res,
        loading,
        error,
    };
};

export const useGetTotalChatCount = (): UseGetTotalCountProps => {
    const [getTotalMsgCount, { data, loading, error }] = useLazyQuery<
        GetMessagesCountByConversationIdQuery,
        GetMessagesCountByConversationIdQueryVariables
    >(getQuery(getMessagesCountByConversationId));
    const res = data?.getMessagesCountByConversationId?.data || null;
    return {
        getTotalMsgCount,
        data: res,
        loading,
        error,
    };
};
