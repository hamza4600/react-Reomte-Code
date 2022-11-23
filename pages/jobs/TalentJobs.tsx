import { withProfile } from "state/profileSteps";
import { JobsProvider } from "state/jobs";
import { TalentMatchCompanies } from "components";

const TalentMatchJobs: React.FC = () => {
  return (
    <JobsProvider>
      <TalentMatchCompanies jobsData={null} loading={true} jobFound={null} />
    </JobsProvider>
  );
};

export default withProfile(TalentMatchJobs);
