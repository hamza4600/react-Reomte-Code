import { MessageResponse } from "@remotebase/amplify-constants/API";

export const scrollToEnd = (chatBoxRef: React.MutableRefObject<HTMLDivElement | null>): void => {
  const scrollHeight = chatBoxRef?.current?.scrollHeight || window.innerHeight;
  chatBoxRef.current?.scrollTo({ left: 0, top: scrollHeight, behavior: "smooth" });
};

export const getReadBy = (message: MessageResponse | null, currentUserId: string): boolean => {
  if (message?.senderInfo?.id === currentUserId) return true;
  return message?.readBy?.some((item) => item?.id === currentUserId) || false;
};
