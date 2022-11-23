import {
    MessageResponse,
    ConversationParticipants,
    PersonInfo,
    Conversation,
    ConversationResponse,
    Message,
} from "@remotebase/amplify-constants/API";

export const convertMessageToMessageResponse = (message: Message): MessageResponse => {
    return {
        __typename: "MessageResponse",
        id: message.id,
        content: message.content,
        senderInfo: message.senderInfo,
        conversationId: message.conversationId,
        createdAt: message.createdAt,
        updatedAt: message.updatedAt,
        isRead: message.isRead,
        version: message.version,
        readBy: message.readBy,
    };
};

export const convertConversationParticipantsToPersonInfo = (
    conversationParticipant: ConversationParticipants,
): PersonInfo | null => {
    let person: PersonInfo | null = null;
    if (conversationParticipant.client) {
        person = {
            id: conversationParticipant.client.id,
            fullName: conversationParticipant.client.fullName,
            role: conversationParticipant.client.role,
            __typename: "PersonInfo",
        };
    } else if (conversationParticipant.talent) {
        person = {
            id: conversationParticipant.talent.id,
            fullName: conversationParticipant.talent.fullName,
            email: conversationParticipant.talent.email,
            phone: conversationParticipant.talent.phone,
            role: conversationParticipant.talent.role,
            __typename: "PersonInfo",
        };
    } else if (conversationParticipant.recruiter) {
        person = {
            id: conversationParticipant.recruiter.id,
            fullName: conversationParticipant.recruiter.fullName,
            email: conversationParticipant.recruiter.email,
            phone: conversationParticipant.recruiter.phone,
            role: conversationParticipant.recruiter.role,
            __typename: "PersonInfo",
        };
    }

    return person || null;
};

export const convertConversationToConversationResponse = (
    conversation: Conversation,
): ConversationResponse => {
    const messagesListResponse: MessageResponse[] = [];
    for (let i = 0; i < (conversation.messages?.items?.length || 0); i += 1) {
        const message: Message | null = (conversation.messages?.items || [])[i];
        if (message) {
            const messageResponse = convertMessageToMessageResponse(message);
            if (messageResponse) {
                messagesListResponse.push(messageResponse);
            }
        }
    }

    const participantsListResponse: PersonInfo[] = [];
    for (let i = 0; i < (conversation.conversationParticipants?.items?.length || 0); i += 1) {
        const conversationParticipant: ConversationParticipants | null = (conversation
            .conversationParticipants?.items || [])[i];
        if (conversationParticipant) {
            const person: PersonInfo | null =
                convertConversationParticipantsToPersonInfo(conversationParticipant);
            if (person) {
                participantsListResponse.push(person);
            }
        }
    }

    return {
        id: conversation?.id,
        name: conversation?.name,
        createdAt: conversation?.createdAt,
        updatedAt: conversation?.updatedAt,
        isActive: conversation?.isActive,
        version: conversation?.version,
        messages: messagesListResponse,
        conversationParticipants: participantsListResponse,
        __typename: "ConversationResponse",
    };
};
