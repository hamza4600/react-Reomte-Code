import { Auth } from "@aws-amplify/auth";
import { useCallback, useContext, useState } from "react";
import {
    ApiCustomHookStateType,
    ApiHookReturnType,
    apiInitialState,
    getSuccessResponse,
    getErrorResponse,
} from "hooks/utils";
import ErrorContext from "state/error/error.context";
import { IErrorContextType } from "@remotebase/constants";
import { resendErrorHeading } from "utils";
import { updateErrorState } from "@remotebase/components";

export const useResendVerificationCode = (): ApiHookReturnType<string, string> => {
    const [res, setRes] = useState<ApiCustomHookStateType<string>>(apiInitialState);
    const { setErrorState, errorState } = useContext<IErrorContextType>(ErrorContext);

    const resendVerification = useCallback(
        async (email): Promise<void> => {
            setRes({ ...apiInitialState, isLoading: true });
            try {
                await Auth.resendSignUp(email);
                setRes(getSuccessResponse<string>(email));
            } catch (error) {
                const { message } = error;
                setRes(getErrorResponse(message));
                updateErrorState({ title: resendErrorHeading, message }, setErrorState);
            }
        },
        [errorState],
    );
    return { res, performAction: resendVerification };
};

export default useResendVerificationCode;
