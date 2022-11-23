import React, { useState } from "react";
import { ChatContext } from "state/chat";
import { ChatStateType } from "state/types/chatTypes";

export const ChatProvider: React.FC = (props) => {
  const [recentMessages, setRecentMessages] = useState<Array<ChatStateType>>([]);

  const value = {
    recentMessages,
    setRecentMessages,
  };

  return <ChatContext.Provider value={value}>{props.children}</ChatContext.Provider>;
};

export default ChatProvider;
