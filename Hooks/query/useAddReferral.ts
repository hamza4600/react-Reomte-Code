import { useCallback, useEffect, useState } from "react";
import short from "short-uuid";
import { useAcceptReferralInvitation } from "hooks";
import { ListReferralsType } from "hooks/types";
import {
    ApiCustomHookStateType,
    ApiHookReturnTypeWithoutParams,
    apiInitialState,
    getErrorResponse,
    getSuccessResponse,
    refLocalKey,
    uuidRegex,
} from "hooks/utils";
import useLocalStorage from "hooks/utils/localStorage";
import { useSentry } from "hooks/sentry";

interface IAddReferral extends ApiHookReturnTypeWithoutParams<ListReferralsType> {
    shouldPerformAction: boolean;
}

export const useAddReferral = (): IAddReferral => {
    const { getItem, deleteItem, res: referralShortUUID } = useLocalStorage();
    const [res, setRes] = useState<ApiCustomHookStateType<ListReferralsType>>(apiInitialState);
    const [referrerId, setReferrerId] = useState<string>();
    const { sendError } = useSentry();
    const {
        acceptRefInvitation,
        data: refResponse,
        isLoading: refLoading,
        error: refError,
    } = useAcceptReferralInvitation();

    const linkReferral = useCallback(async () => {
        setRes({ ...apiInitialState, isLoading: true });
        try {
            if (referrerId) {
                acceptRefInvitation({ variables: { referrerId } });
            } else setRes(getErrorResponse("Referral Id is not set"));
        } catch (error) {
            sendError(error, { referrerId });
            setRes(getErrorResponse(error?.message));
        }
    }, [referrerId]);

    const fromShortUUID = (shortUUID: string | null): string => {
        const UUID = shortUUID?.length === 22 ? short().toUUID(shortUUID) : "";
        if (uuidRegex.test(UUID)) return UUID;
        return "";
    };

    useEffect(() => {
        if (referralShortUUID) {
            const referralUUID = fromShortUUID(referralShortUUID);
            if (referralUUID.length) setReferrerId(referralUUID);
        }
    }, [referralShortUUID]);

    useEffect(() => {
        if (!refLoading) {
            if (refError) {
                sendError(refError, { referrerId });
                setRes(getErrorResponse(refError));
            } else if (refResponse) {
                setRes(getSuccessResponse(refResponse));
                setReferrerId(undefined);
                deleteItem(refLocalKey);
            }
        }
    }, [refLoading, refResponse]);

    useEffect(() => {
        getItem(refLocalKey);
    }, []);

    return {
        res,
        performAction: linkReferral,
        shouldPerformAction: !!referrerId,
    };
};

export default useAddReferral;
