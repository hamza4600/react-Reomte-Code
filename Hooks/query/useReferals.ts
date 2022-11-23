import { useQuery, useMutation } from "@apollo/client";
import {
    ListReferralsQueryVariables,
    InviteEmailsMutation,
    InviteEmailsMutationVariables,
    TrackReferralsQuery,
    AcceptInvitationMutation,
    AcceptInvitationMutationVariables,
    ReInviteEmailMutation,
    ReInviteEmailMutationVariables,
} from "API";

import { inviteEmails, acceptInvitation, reInviteEmail } from "graphql/mutations";
import { trackReferrals } from "graphql/queries";
import {
    ReturnPropsAcceptIntivation,
    ReturnPropsRefProfile,
    ReturnPropsReInvite,
} from "hooks/types";

import { ApiCustomHookStateType, IReferralData } from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const useTrackReferral = (): ApiCustomHookStateType<IReferralData> => {
    const { loading, data, error } = useQuery<TrackReferralsQuery, ListReferralsQueryVariables>(
        getQuery(trackReferrals),
    );
    const referralList = data?.trackReferrals?.data || null;
    return { success: true, isLoading: loading, data: referralList, error: error?.message || null };
};

export const useAcceptReferralInvitation = (): ReturnPropsAcceptIntivation => {
    const [acceptRefInvitation, { data, loading, error }] = useMutation<
        AcceptInvitationMutation,
        AcceptInvitationMutationVariables
    >(getQuery(acceptInvitation));

    const errorData =
        error?.message || data?.acceptInvitation?.code === 500 ? "Invalid referral" : null;
    return {
        acceptRefInvitation,
        data,
        isLoading: loading,
        error: errorData,
    };
};

export const useInviteEmails = (): ReturnPropsRefProfile => {
    const [refProfile, { data: refInvitesData, loading: refInvitesLoading, error: refInvitesError }] =
        useMutation<InviteEmailsMutation, InviteEmailsMutationVariables>(getQuery(inviteEmails));

    const successCode = refInvitesData?.inviteEmails?.code || null;
    return {
        refProfile,
        data: refInvitesData,
        isLoading: refInvitesLoading,
        error: refInvitesError,
        success: successCode === 201,
    };
};

export const useReInviteEmails = (): ReturnPropsReInvite => {
    const [refProfile, { data, loading, error }] = useMutation<
        ReInviteEmailMutation,
        ReInviteEmailMutationVariables
    >(getQuery(reInviteEmail));
    const code = data?.reInviteEmail?.code || null;
    const isSuccess = code === 201 || code === 200;
    const errorMsg =
        error || !isSuccess ? new Error(data?.reInviteEmail?.message || "Error!") : undefined;
    return {
        refProfile,
        data,
        isLoading: loading,
        error: errorMsg,
        success: isSuccess,
    };
};
