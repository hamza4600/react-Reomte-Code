import { FC, Fragment } from "react";
import { ShouldRender, Username, ReferralPolicy } from "@remotebase/components";
import { ReferralHandler } from "components";
import { ProfileProps, referralPageHeading, refTrackBoxHeading } from "utils";
import { ReferralProvider } from "state/referral";
import { ReferralShimmer } from "shimmerPages";
import { withProfile } from "state/profileSteps";
import * as Styled from "./styles";

export type ActiveType = {
  active: string;
  color: string;
};

export const ReferralPage: FC<ProfileProps> = ({ profileState: { data } }) => {
  return (
    <Fragment>
      <ShouldRender if={!data?.fullName}>
        <ReferralShimmer />
      </ShouldRender>
      <ShouldRender if={data?.fullName}>
        <Styled.ReferralWrapper>
          <Styled.ReferralTop>
            <Styled.HeadingMain>
              Hi <Username showFirstName fullName={data?.fullName} /> 👋
            </Styled.HeadingMain>
            <Styled.HeadingSmall>{referralPageHeading}</Styled.HeadingSmall>
          </Styled.ReferralTop>
          <Styled.RefTrackBox>
            <Styled.HeadingMain>{refTrackBoxHeading}</Styled.HeadingMain>
            <ReferralProvider>
              <ReferralHandler />
            </ReferralProvider>
          </Styled.RefTrackBox>
          <Styled.ReferralPolicyWrapper>
            <ReferralPolicy />
          </Styled.ReferralPolicyWrapper>
        </Styled.ReferralWrapper>
      </ShouldRender>
    </Fragment>
  );
};

export default withProfile(ReferralPage);
