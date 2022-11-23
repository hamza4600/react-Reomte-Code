import { useSubscription } from "@apollo/client";
import { MessageResponse } from "@remotebase/amplify-constants/API";
import { onCreateMessage } from "@remotebase/amplify-constants/graphql/subscriptions";
import { convertMessageToMessageResponse, getQuery } from "hooks/utils";
import { useEffect, useState } from "react";

export const useChatSubscription = (convoId: string): MessageResponse | null => {
    const { data, loading } = useSubscription(getQuery(onCreateMessage), {
        variables: { conversationId: convoId },
    });

    const [newMessage, setNewMessage] = useState<MessageResponse | null>(null);

    useEffect(() => {
        if (data && !loading) {
            setNewMessage(convertMessageToMessageResponse(data.onCreateMessage));
        }
    }, [data, loading]);

    return newMessage;
};

export default useChatSubscription;
