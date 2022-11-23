import { getAllDomainTests, getCandidateTestInfo } from "graphql/queries";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import {
    InviteUserForTestMutation,
    InviteUserForTestMutationVariables,
    GetAllDomainTestsQuery,
    GetProblemSolvingTestMutation,
    GetCandidateTestInfoQuery,
} from "API";
import { inviteUserForTest, getProblemSolvingTest } from "graphql/mutations";
import { getQuery } from "hooks/utils/helpers";
import {
    ReturnPropsGetHakerRankUrl,
    ReturnPropsGetAllTests,
    GetProblemSolvingHookReturnType,
    ReturnPropsGetAllTestsStatus,
} from "hooks/types";
import { useMemo } from "react";

export const useGetHakerRankUrl = (): ReturnPropsGetHakerRankUrl => {
    const [getHackerRankUrl, { data, loading, error }] = useMutation<
        InviteUserForTestMutation,
        InviteUserForTestMutationVariables
    >(getQuery(inviteUserForTest));

    return {
        getHackerRankUrl,
        data,
        isLoading: loading,
        error,
    };
};

export const useGetAllDomainTests = (): ReturnPropsGetAllTests => {
    const { data, loading, error } = useQuery<GetAllDomainTestsQuery>(getQuery(getAllDomainTests));
    const result = data?.getAllDomainTests?.data || [];
    const resultToSend = useMemo(
        () => result.filter((testSingle) => testSingle?.state === "active"),
        [result],
    );
    const errorData = result ? undefined : error;
    return {
        data: resultToSend,
        loading,
        error: errorData,
    };
};

export const useGetAllDomainTestsStatus = (): ReturnPropsGetAllTestsStatus => {
    const [getDomainTestStatus, { data, loading, error }] = useLazyQuery<GetCandidateTestInfoQuery>(
        getQuery(getCandidateTestInfo),
    );
    const result = data?.getCandidateTestInfo?.data || null;
    const errorData = result ? undefined : error;
    return {
        getDomainTestStatus,
        data: result,
        loading,
        error: errorData,
    };
};

export const useGetProblemSolvingTest = (): GetProblemSolvingHookReturnType => {
    const [getProblemSolving, { data, loading, error }] = useMutation<
        GetProblemSolvingTestMutation,
        undefined
    >(getQuery(getProblemSolvingTest));

    return {
        getProblemSolving,
        data,
        isLoading: loading,
        error,
    };
};
