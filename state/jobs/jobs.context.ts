import { createContext } from "react";
import { JobContextType } from "./jobs.interface";

export const JobsContext = createContext<JobContextType>({
  jobsData: null,
  setJobsData: (data): void => {
    console.log("EMPLOYEE JOBS: ", data);
  },
  jobFound: null,
  jobLoading: false,
});

export default JobsContext;
