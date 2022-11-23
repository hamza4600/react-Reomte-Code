import React, { useContext, useState } from "react";
import { ProfileContext, ProfileContextType, withProfile } from "state/profileSteps";
import { JobsContext } from "./jobs.context";
import { IJobsData } from "./jobs.interface";

export const JobsProvider: React.FC = (props) => {
  const { profileState } = useContext<ProfileContextType>(ProfileContext);
  const [jobsData, setJobsData] = useState<IJobsData>(null);
  const profileId = profileState?.data?.id;
  const isHired = profileState?.data?.profile?.isHired;
  const talentSkills = profileState?.data?.profile?.takenDomainTests
    ?.filter((item) => item?.isPass)
    .map((domain) => domain?.skill);

  const value = {
    jobsData,
    setJobsData,
    profileId,
    talentSkills,
    jobLoading: false,
    jobFound: null,
    isHired,
  };

  return <JobsContext.Provider value={value}>{props.children} </JobsContext.Provider>;
};

export default withProfile(JobsProvider);
