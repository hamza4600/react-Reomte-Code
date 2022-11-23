import { FC } from "react";
import * as Styled from "./styles";

export const ChatListMsgShimmer: FC = () => {
  return (
    <Styled.ChatListShimmerMsgList>
      <Styled.ChatListShimmerMsgListBox>
        <Styled.ImgAvatarShimmerMd />
        <Styled.ChatListShimmerMsgListContent>
          <Styled.ChatListShimmerMsgTop>
            <Styled.ChatListShimmerMsgName />
            <Styled.ChatListShimmerMsgTime />
          </Styled.ChatListShimmerMsgTop>
          <Styled.ChatListShimmerMsgBtm />
        </Styled.ChatListShimmerMsgListContent>
      </Styled.ChatListShimmerMsgListBox>
    </Styled.ChatListShimmerMsgList>
  );
};

export default ChatListMsgShimmer;
