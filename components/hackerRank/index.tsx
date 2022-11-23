import { ErrorProps, RemoteBaseAnalyticsEvents } from "@remotebase/constants";
import { ShouldRender } from "@remotebase/components";
import { TechSkillTestProvider, UpdateTalentProfileWithUsdSalaryInput } from "API";
import { DomainTestModal } from "components";
import { useAnalyticsEventCreator, useTalentProfile, useGetHakerRankUrl } from "hooks";
import { useSentry } from "hooks/sentry";
import { FC, Fragment, ReactElement, useEffect, useState } from "react";
import withError from "state/error/withErrorHoc";
import { IProfileDetails, withProfile } from "state/profileSteps";
import {
  hackerRankUrlErrorHeading,
  parseInviteResponse,
  Sidebar,
  codeTestText,
  ProfileProps,
  hackerRankUrlErrorMessage,
  PendingDomainTestType,
  HackerRankInviteResponse,
} from "utils";
import { ITestBlock } from "../../state/codeTests";

interface CustomProps {
  test: ITestBlock;
  clickableId?: string;
  pendingDomainTest: PendingDomainTestType | undefined;
  children: ReactElement<unknown>;
  onTestOpen?: () => void;
  type: Sidebar;
}

const HackerRank: FC<ProfileProps & ErrorProps & CustomProps> = (props) => {
  const [show, setShow] = useState(false);
  const { updateProfile, data: updatedProfile, isLoading } = useTalentProfile();
  const { data: hackerRankResponse, getHackerRankUrl, error } = useGetHakerRankUrl();
  const { performAction: analyticsRegisterEvent } = useAnalyticsEventCreator();
  const { sendError } = useSentry();
  const {
    test: { id: testId, skillName: testName, instructions, tags },
    type,
    children,
    clickableId,
    profileState: { data: profileData },
    updateUserProfile,
    showError,
    pendingDomainTest,
  } = props;
  const [testUrl, setTestUrl] = useState("");
  const updateProfileDetails = (inviteData: HackerRankInviteResponse): void => {
    if (profileData?.profile) {
      const { profile } = profileData;
      const { candidateId, url } = inviteData;
      const input: UpdateTalentProfileWithUsdSalaryInput = {
        expectedVersion: profile.version || 1,
        id: profile.id,
      };
      if (type === Sidebar.ProblemSolving) input.problemSolvingScore = 0;
      if (type === Sidebar.DomainTesting && tags?.[0]) {
        const domainTests =
          profile.takenDomainTests?.map((e) => {
            if (e) {
              const { __typename: typename, ...rest } = e;
              return rest;
            }
            return null;
          }) || [];
        input.takenDomainTests = [
          ...domainTests,
          {
            skill: tags[0],
            score: 0,
            isPass: false,
            provider: TechSkillTestProvider.HackerRank,
            testStart: new Date().toISOString(),
            domainTestData: JSON.stringify({ testId, url, candidateId, tag: tags[0] }),
          },
        ];
      }
      updateProfile({ variables: { input } });
    }
  };

  const handleClick = (): void => {
    if (clickableId && testId && instructions) {
      setShow(true);
    }
  };
  const hideModal = (): void => {
    setShow(false);
  };
  const handleOkay = (): void => {
    if (testUrl) window.open(testUrl);
    else if (testId && !testUrl) getHackerRankUrl({ variables: { testId } });
    hideModal();
  };

  useEffect(() => {
    if (hackerRankResponse?.inviteUserForTest) {
      const inviteData = parseInviteResponse(hackerRankResponse.inviteUserForTest);
      if (inviteData) {
        const { url } = inviteData;
        analyticsRegisterEvent(RemoteBaseAnalyticsEvents.TAKE_DOMAIN_TEST, { metaData: testName });
        setTestUrl(url);
        window.open(url);
        updateProfileDetails(inviteData);
      } else {
        showError({
          title: hackerRankUrlErrorHeading,
          message: hackerRankUrlErrorMessage,
        });
      }
    }
    if (error) {
      sendError(error, { testId, userId: profileData?.profile?.id });
      showError({ title: hackerRankUrlErrorHeading, message: error?.message });
    }
  }, [hackerRankResponse, error]);
  useEffect(() => {
    if (clickableId) {
      document.getElementById(clickableId)?.addEventListener("click", handleClick);
    }
    return (): void => {
      if (clickableId) {
        document.getElementById(clickableId)?.removeEventListener("click", handleClick);
      }
    };
  }, [clickableId]);
  useEffect(() => {
    if (!isLoading && updatedProfile) updateUserProfile(updatedProfile as IProfileDetails);
  }, [updatedProfile, isLoading]);

  useEffect(() => {
    if (pendingDomainTest) setTestUrl(pendingDomainTest.url);
  }, [pendingDomainTest]);

  return (
    <Fragment>
      <Fragment>{children}</Fragment>
      <ShouldRender if={show}>
        <DomainTestModal
          onCancel={hideModal}
          onOkay={handleOkay}
          heading={codeTestText.heading}
          body={instructions || ""}
          btnText={codeTestText.btnText}
        />
      </ShouldRender>
    </Fragment>
  );
};

export default withProfile(withError(HackerRank));
