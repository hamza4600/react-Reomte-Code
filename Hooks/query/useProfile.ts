import { useLazyQuery, useMutation } from "@apollo/client";
import { RemoteBaseAnalyticsEvents } from "@remotebase/constants";
import {
    CreateTalentProfileMutation,
    CreateTalentProfileMutationVariables,
    UpdateTalentMutation,
    UpdateTalentMutationVariables,
    GetTalentQuery,
    CreateTalentMutation,
    CreateTalentMutationVariables,
    UpdateTalentProfileWithUsdSalaryMutation,
    UpdateTalentProfileWithUsdSalaryMutationVariables,
    GetTalentQueryVariables,
    TalentProfile,
} from "API";
import {
    createTalent,
    createTalentProfile,
    updateTalent,
    updateTalentProfileWithUsdSalary,
} from "graphql/mutations";
import { getTalent } from "graphql/queries";
import { useAnalyticsEventCreator } from "hooks/analytics";
import {
    ReturnPropsTalentProfile,
    UseTalentProfileProps,
    GetTalentProfileProps,
} from "hooks/types";
import { getQuery } from "hooks/utils/helpers";

export const useTalentProfile = (): ReturnPropsTalentProfile => {
    const [
        createProfile,
        { data: createProfileData, loading: createProfileLoading, error: createProfileError },
    ] = useMutation<CreateTalentProfileMutation, CreateTalentProfileMutationVariables>(
        getQuery(createTalentProfile),
    );

    const { performAction: analyticsRegisterEvent } = useAnalyticsEventCreator();

    const [
        updateProfile,
        { data: updateProfileData, loading: updateProfileLoading, error: updateProfileError },
    ] = useMutation<
        UpdateTalentProfileWithUsdSalaryMutation,
        UpdateTalentProfileWithUsdSalaryMutationVariables
    >(getQuery(updateTalentProfileWithUsdSalary), {
        onCompleted() {
            analyticsRegisterEvent(RemoteBaseAnalyticsEvents.TALENT_PROFILE_UPDATE);
        },
        onError() {
            analyticsRegisterEvent(RemoteBaseAnalyticsEvents.TALENT_PROFILE_UPDATE_FAILED);
        },
    });
    return {
        createProfile,
        updateProfile,
        data: (updateProfileData?.updateTalentProfileWithUsdSalary?.data ||
            createProfileData?.createTalentProfile) as TalentProfile,
        isLoading: createProfileLoading || updateProfileLoading,
        error: createProfileError || updateProfileError,
    };
};

export const useTalentsProfile = (): UseTalentProfileProps => {
    const [createInfo, { data: createInfoData, loading: createInfoLoading, error: createInfoError }] =
        useMutation<CreateTalentMutation, CreateTalentMutationVariables>(getQuery(createTalent));

    const [updateInfo, { data: updateInfoData, loading: updateInfoLoading, error: updateInfoError }] =
        useMutation<UpdateTalentMutation, UpdateTalentMutationVariables>(getQuery(updateTalent));

    return {
        createInfo,
        updateInfo,
        data: updateInfoData?.updateTalent || createInfoData?.createTalent,
        isLoading: updateInfoLoading || createInfoLoading,
        error: createInfoError || updateInfoError,
    };
};

export const getTalentProfile = (): GetTalentProfileProps => {
    const [getProfile, { data, loading, error }] = useLazyQuery<
        GetTalentQuery,
        GetTalentQueryVariables
    >(getQuery(getTalent));
    const profileData = data?.getTalent || null;
    const errorData = error || (profileData ? undefined : new Error("No Talent Found"));
    return { loading, getProfile, profileData, error: errorData };
};
