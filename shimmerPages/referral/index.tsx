import { FC } from "react";
import RefBoxShimmer from "./RefBoxShimmer";
import * as Styled from "./styles";

export const ReferralShimmer: FC = () => {
  return (
    <Styled.ReferralWrapper>
      <Styled.ReferralTop>
        <Styled.HeadingMain />
        <Styled.HeadingSmall />
      </Styled.ReferralTop>

      <Styled.EmailListBox>
        <Styled.HeadingEmail />
        <Styled.EmailListText />
        <Styled.RefTextAreaBox>
          <Styled.RefTextArea />
          <Styled.PurpleBtn />
        </Styled.RefTextAreaBox>
      </Styled.EmailListBox>

      <Styled.PersonalLinkBox>
        <Styled.ShareCodeText />
        <Styled.CopyLinkBox>
          <Styled.CopyLinkInput />
          <Styled.CopyLinkBtn />
        </Styled.CopyLinkBox>
      </Styled.PersonalLinkBox>

      <Styled.LinkSocialsBox>
        <Styled.LinkSocialsText />
        <Styled.SocialIcons>
          {[...Array(3)].map((e, i) => {
            return (
              <Styled.SocialIconSingle key={`social${i}`}>
                <Styled.IconShimmer />
              </Styled.SocialIconSingle>
            );
          })}
        </Styled.SocialIcons>
      </Styled.LinkSocialsBox>

      <RefBoxShimmer />
    </Styled.ReferralWrapper>
  );
};

export default ReferralShimmer;
