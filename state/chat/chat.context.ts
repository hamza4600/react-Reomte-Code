import { createContext } from "react";
import { ChatContextType } from "../types/chatTypes";

export const ChatContext = createContext<ChatContextType>({
  recentMessages: [],
  setRecentMessages: () => {},
});

export default ChatContext;
