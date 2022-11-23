import { FC } from "react";
import * as Styled from "./styles";

export const ChatBodyShimmer: FC = () => {
  return (
    <Styled.ChatBodyShimmerWrapper>
      <Styled.ChatBodyShimmerHeader>
        <Styled.ChatBodyShimmerProfile>
          <Styled.ImgShimmerAvatar />
          <Styled.ChatBodyShimmerProfileDetail>
            <Styled.ChatBodyShimmerProfileTitle />
            <Styled.ChatBodyShimmerProfileStatus />
          </Styled.ChatBodyShimmerProfileDetail>
        </Styled.ChatBodyShimmerProfile>
        <Styled.ChatBodyShimmerHeaderRight>
          <Styled.ChatBodyShimmerHeaderDropDown>
            <Styled.ChatBodyShimmerHeaderDropDownSvg />
          </Styled.ChatBodyShimmerHeaderDropDown>
        </Styled.ChatBodyShimmerHeaderRight>
      </Styled.ChatBodyShimmerHeader>

      <Styled.ChatBodyShimmerMessageWrapper>
        <Styled.ChatBodyShimmerNoMsgWrapper>
          <Styled.ChatBodyShimmerNoMsgImg />
          <Styled.ChatBodyShimmerNoMsgtext>
            <Styled.ChatBodyShimmerNoMsgtextDiv />
            <Styled.ChatBodyShimmerNoMsgtextDiv />
            <Styled.ChatBodyShimmerNoMsgtextDiv />
          </Styled.ChatBodyShimmerNoMsgtext>
        </Styled.ChatBodyShimmerNoMsgWrapper>
      </Styled.ChatBodyShimmerMessageWrapper>

      <Styled.ChatBodyShimmerSearchWrapper>
        <Styled.ChatBodyShimmerSearchInput />
        <Styled.ChatBodyShimmerFooterIcon>
          <Styled.ChatBodyShimmerFooterIconSvg />
        </Styled.ChatBodyShimmerFooterIcon>
      </Styled.ChatBodyShimmerSearchWrapper>
    </Styled.ChatBodyShimmerWrapper>
  );
};

export default ChatBodyShimmer;
