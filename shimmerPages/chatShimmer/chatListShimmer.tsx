import { FC } from "react";
import ChatListMsgShimmer from "./chatListMsgShimmer";
import * as Styled from "./styles";

export const ChatListShimmer: FC = () => {
  return (
    <Styled.ChatListShimmerWrapper>
      <Styled.ChatListShimmerHeader>
        <Styled.ChatListShimmerHeaderLeft>
          <Styled.ChatListShimmerHeaderIcon>
            <Styled.ChatListShimmerHeaderIconSvg />
          </Styled.ChatListShimmerHeaderIcon>
          <Styled.ChatListShimmerHeaderBackText />
        </Styled.ChatListShimmerHeaderLeft>
      </Styled.ChatListShimmerHeader>

      <Styled.ChatListShimmerSearchWrapper>
        <Styled.ChatListShimmerSearchInput />
      </Styled.ChatListShimmerSearchWrapper>

      {[...Array(6)].map((e, i) => (
        <ChatListMsgShimmer key={i} />
      ))}
    </Styled.ChatListShimmerWrapper>
  );
};

export default ChatListShimmer;
