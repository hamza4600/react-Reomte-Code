import { useMutation } from "@apollo/client";
import { publishHrVideoToWorkable } from "graphql/mutations";
import { getQuery } from "hooks/utils/helpers";
import { UseHRVideoProps } from "hooks/types";
import {
    PublishHrVideoToWorkableMutation,
    PublishHrVideoToWorkableMutationVariables,
} from "@remotebase/amplify-constants/API";

export const useHRVideoMutation = (): UseHRVideoProps => {
    const [publishHRVideo, { data, loading, error }] = useMutation<
        PublishHrVideoToWorkableMutation,
        PublishHrVideoToWorkableMutationVariables
    >(getQuery(publishHrVideoToWorkable));
    const res = data?.publishHrVideoToWorkable;
    return {
        publishHRVideo,
        data: res,
        loading,
        error,
    };
};

export default useHRVideoMutation;
