import { FC } from "react";
import ChatBodyShimmer from "./chatBodyShimmer";
import ChatListShimmer from "./chatListShimmer";
import * as Styled from "./styles";

export const ChatMainShimmer: FC = () => {
  return (
    <Styled.ChatShimmerWrapper>
      <Styled.ChatShimmerContainer>
        <ChatListShimmer />
        <ChatBodyShimmer />
      </Styled.ChatShimmerContainer>
    </Styled.ChatShimmerWrapper>
  );
};

export default ChatMainShimmer;
