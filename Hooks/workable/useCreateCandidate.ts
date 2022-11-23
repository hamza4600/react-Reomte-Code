import { DefaultContext, MutationFunctionOptions, useMutation } from "@apollo/client";
import { CreateCandidateMutationVariables, CreateCandidateMutation } from "API";
import { createCandidate } from "graphql/mutations";
import { getQuery } from "hooks/utils/helpers";

type UseCreateCandidateReturnType = {
    createCandidateFunc: (
        options: MutationFunctionOptions<
            CreateCandidateMutation,
            CreateCandidateMutationVariables,
            DefaultContext
        >,
    ) => void;
    data: CreateCandidateMutation | null | undefined;
    isLoading: boolean;
};

export const useCreateCandidate = (): UseCreateCandidateReturnType => {
    const [createCandidateFunc, { data, loading }] = useMutation<
        CreateCandidateMutation,
        CreateCandidateMutationVariables
    >(getQuery(createCandidate));

    return {
        createCandidateFunc,
        data,
        isLoading: loading,
    };
};

export default useCreateCandidate;
