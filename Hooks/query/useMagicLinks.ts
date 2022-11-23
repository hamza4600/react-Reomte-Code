import { useLazyQuery, useMutation } from "@apollo/client";
import {
    CreateMagicLinkMutation,
    VerifyAndGetAvailableSlotsQuery,
    VerifyAndGetAvailableSlotsQueryVariables,
} from "@remotebase/amplify-constants/API";
import { createMagicLink } from "@remotebase/amplify-constants/graphql/mutations";
import { verifyAndGetAvailableSlots } from "@remotebase/amplify-constants/graphql/queries";
import { getQuery } from "hooks/utils";
import { IReturnPropsMagicLink, IReturnPropsScheduleMagicLink } from "state/types/magicLinkTypes";

export const useMagicLink = (): IReturnPropsMagicLink => {
    const [sendMagicLink, { data }] = useMutation<CreateMagicLinkMutation>(getQuery(createMagicLink));
    const { message, code } = data?.createMagicLink || {};

    return {
        sendMagicLink,
        message,
        code,
    };
};

export const useScheduleMagicLink = (): IReturnPropsScheduleMagicLink => {
    const [getAvailableSlots, { data, loading }] = useLazyQuery<
        VerifyAndGetAvailableSlotsQuery,
        VerifyAndGetAvailableSlotsQueryVariables
    >(getQuery(verifyAndGetAvailableSlots));
    const availableSlots = data?.verifyAndGetAvailableSlots?.data || [];
    const code = data?.verifyAndGetAvailableSlots?.code || null;

    return {
        getAvailableSlots,
        loading,
        availableSlots,
        code,
    };
};
