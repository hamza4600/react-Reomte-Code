import { TalentMatchDetails } from "components";
import { JobsProvider } from "state/jobs";
import { withProfile } from "state/profileSteps";

const TalentJobDetails: React.FC = () => {
  return (
    <JobsProvider>
      <TalentMatchDetails jobFound={null} jobLoading={false} />
    </JobsProvider>
  );
};

export default withProfile(TalentJobDetails);
