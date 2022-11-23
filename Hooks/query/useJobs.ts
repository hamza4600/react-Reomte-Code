import { useLazyQuery, useMutation } from "@apollo/client";
import {
    ListJobMatchesQuery,
    ListJobMatchesQueryVariables,
    ListJobsQuery,
    ListJobsQueryVariables,
    GetJobQuery,
    GetJobQueryVariables,
    CreateJobMatchMutation,
    CreateJobMatchMutationVariables,
    JobMatch,
    GetJobMatchQuery,
    GetJobMatchQueryVariables,
} from "@remotebase/amplify-constants/API";
import {
    listJobMatches,
    listJobs,
    getJob,
    getJobMatch,
} from "@remotebase/amplify-constants/graphql/queries";
import { createJobMatch } from "@remotebase/amplify-constants/graphql/mutations";
import {
    ReturnPropsJob,
    ReturnPropsJobMatch,
    ReturnPropsJobsList,
    ReturnPropsMatchCompaniesList,
    ReturnPropsSubmitJobMatch,
} from "hooks/types";
import { getQuery } from "hooks/utils";

export const useTalentMatchCompanyList = (): ReturnPropsMatchCompaniesList => {
    const [talentMatchList, { data, loading, called }] = useLazyQuery<
        ListJobMatchesQuery,
        ListJobMatchesQueryVariables
    >(getQuery(listJobMatches));

    const matchedList = data?.listJobMatches?.items || null;
    const nextToken = data?.listJobMatches?.nextToken || null;

    return { talentMatchList, matchedList, nextToken, loading, called };
};

export const useJobsList = (): ReturnPropsJobsList => {
    const [jobsList, { data, loading, called }] = useLazyQuery<ListJobsQuery, ListJobsQueryVariables>(
        getQuery(listJobs),
    );

    const jobsFoundList = data?.listJobs?.items || null;
    const nextToken = data?.listJobs?.nextToken || null;

    return { jobsList, jobsFoundList, nextToken, loading, called };
};

export const useJob = (): ReturnPropsJob => {
    const [job, { data, loading }] = useLazyQuery<GetJobQuery, GetJobQueryVariables>(
        getQuery(getJob),
    );
    const jobFound = data?.getJob || null;

    return { job, jobFound, loading };
};

export const useCreateJobMatch = (): ReturnPropsSubmitJobMatch => {
    const [submitCreateMatch, { data, loading }] = useMutation<
        CreateJobMatchMutation,
        CreateJobMatchMutationVariables
    >(getQuery(createJobMatch));
    const result = (data?.createJobMatch as JobMatch) || null;

    return { submitCreateMatch, result, loading };
};

export const useJobMatch = (): ReturnPropsJobMatch => {
    const [fetchJobMatch, { data, loading }] = useLazyQuery<
        GetJobMatchQuery,
        GetJobMatchQueryVariables
    >(getQuery(getJobMatch));
    const jobMatch = (data?.getJobMatch as JobMatch) || null;

    return { fetchJobMatch, jobMatch, loading };
};
