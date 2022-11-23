import withApolloProvider from "hooks/apollo/withApollo";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Job, JobMatch, matchStage } from "@remotebase/amplify-constants/API";
import { matchTalentJobs } from "utils";
import { useTalentMatchCompanyList, useJobsList, useJob } from "hooks";
import { QueryParams, limit } from "@remotebase/components";
import { JobsContext } from "./jobs.context";
import { IJobsData, JobProps } from "./jobs.interface";

export function withJobs<T>(Component: React.FC<T & JobProps>): React.FC<T> {
  return withApolloProvider((props: T) => {
    // Get page query from url
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const id = query.get(QueryParams.ID);
    const { talentMatchList, matchedList, loading, nextToken, called } =
      useTalentMatchCompanyList();
    const {
      jobsList,
      jobsFoundList,
      nextToken: nextTokenJobs,
      loading: loadingJobs,
      called: calledJobs,
    } = useJobsList();
    const { job: currentJob, jobFound, loading: jobLoading } = useJob();
    const { jobsData, setJobsData, profileId, talentSkills, isHired } = useContext(JobsContext);
    const [isApplied, setIsApplied] = useState(false);
    const [isMatched, setIsMatched] = useState(false);
    const [matches, setMatches] = useState<(JobMatch | null)[]>([]);
    const [jobs, setJobs] = useState<(Job | null)[]>([]);
    const getLoadingState = useMemo(() => {
      return !!nextToken || !!nextTokenJobs || loading || jobLoading || loadingJobs;
    }, [nextToken, nextTokenJobs, loading, jobLoading, loadingJobs]);
    useEffect(() => {
      if (!id) {
        talentMatchList({
          variables: {
            filter: {
              and: [{ talentID: { eq: profileId } }, { isPublished: { eq: true } }],
            },
            limit,
          },
        });
        jobsList({
          variables: {
            filter: {
              isPublic: {
                eq: true,
              },
            },
            limit,
          },
        });
      }
      if (id) {
        talentMatchList({
          variables: {
            filter: { jobID: { eq: id } },
          },
        });
      }
    }, []);

    useEffect(() => {
      if (!id) {
        const filter = {
          and: [{ talentID: { eq: profileId } }, { isPublished: { eq: true } }],
        };
        if (!loading && called && nextToken) {
          matchTalentJobs({ talentMatchList, filter, limit, nextToken });
        }
        const filterJobs = {
          isPublic: {
            eq: true,
          },
        };
        if (!loadingJobs && calledJobs && nextTokenJobs) {
          matchTalentJobs({
            jobsList,
            filter: filterJobs,
            limit,
            nextToken: nextTokenJobs,
          });
        }
      }

      if (id) {
        const filter = { jobID: { eq: id } };
        if (!loading && called && nextToken) {
          matchTalentJobs({ talentMatchList, filter, limit, nextToken });
        }
      }
    }, [nextToken, nextTokenJobs]);

    useEffect(() => {
      if (matchedList) {
        const filterMatchJobs = matchedList.filter((newMatch) =>
          matches.every((oldMatch) => oldMatch?.id !== newMatch?.id),
        );
        setMatches((prev) => [...prev, ...filterMatchJobs]);
      }
    }, [matchedList]);

    // Fetch all matched and a limit of public jobs on mount

    useEffect(() => {
      if (jobsFoundList) {
        if (!jobs.find((obj) => obj && jobsFoundList[0] && obj.id === jobsFoundList[0].id)) {
          setJobs((prev) => [...prev, ...jobsFoundList]);
        }
      }
    }, [jobsFoundList]);

    useEffect(() => {
      if (id) {
        currentJob({
          variables: { id },
        });
      }
    }, [id]);

    // extract job field from matched and store extract, store public jobs
    useEffect(() => {
      if (jobs && matches) {
        const matchedJobs: IJobsData = [];
        const matchedJobIds: string[] = [];
        for (const singleJob of matches) {
          if (singleJob?.job) {
            matchedJobs.push({
              ...singleJob.job,
              matched: true,
              isApplied: singleJob.stage === matchStage.interested,
              isUnavailable: isHired === false || singleJob.stage === "rejected",
            });
            matchedJobIds.push(singleJob.jobID);
          }
        }
        matchedJobs.sort((a, b) => Number(a?.isApplied) - Number(b?.isApplied));
        matchedJobs.sort((a, b) => Number(a?.isUnavailable) - Number(b?.isUnavailable));
        const unMatchedPublicJobs = jobs.filter((e) => e?.id && matchedJobIds?.indexOf(e.id) < 0);
        setJobsData(matchedJobs?.concat(unMatchedPublicJobs));
      }
    }, [jobs, matches]);

    useEffect(() => {
      if (id && matches && jobFound) {
        setIsMatched(!!matches[0]);
        setIsApplied(matches[0]?.stage === matchStage.interested);
      }
    }, [id, matches, jobFound]);

    const opporProps: JobProps = {
      jobsData,
      setJobsData,
      talentSkills,
      loading: getLoadingState,
      jobLoading,
      isApplied,
      isMatched,
      jobFound,
      profileId,
    };

    return <Component {...props} {...opporProps} />;
  });
}

export default withJobs;
