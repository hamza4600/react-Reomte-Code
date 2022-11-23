import { useMutation } from "@apollo/client";
import { setVideoResponse } from "graphql/mutations";
import { getQuery } from "hooks/utils/helpers";
import { FetchHRVideoProps } from "hooks/types";
import {
    SetVideoResponseMutation,
    SetVideoResponseMutationVariables,
} from "@remotebase/amplify-constants/API";

export const addHRVideoLink = (): FetchHRVideoProps => {
    const [fetchVideoLink, { data, loading, error }] = useMutation<
        SetVideoResponseMutation,
        SetVideoResponseMutationVariables
    >(getQuery(setVideoResponse));
    const res = data?.setVideoResponse;
    return {
        fetchVideoLink,
        data: res,
        loading,
        error,
    };
};

export default addHRVideoLink;
