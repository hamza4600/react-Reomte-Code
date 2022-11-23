import { Auth } from "@aws-amplify/auth";
import { useCallback, useContext, useState } from "react";
import {
    ApiCustomHookStateType,
    ApiHookReturnType,
    apiInitialState,
    getSuccessResponse,
    getErrorResponse,
} from "hooks/utils";
import { AuthContextType } from "state/types/authTypes";
import { AuthContext } from "state/auth";
import ErrorContext from "state/error/error.context";
import { IErrorContextType } from "@remotebase/constants";
import { passwordErrorHeading } from "utils";
import { updateErrorState } from "@remotebase/components";

export const useForgetPassword = (): ApiHookReturnType<string, string> => {
    const [res, setRes] = useState<ApiCustomHookStateType<string>>(apiInitialState);
    const { setAuthState } = useContext<AuthContextType>(AuthContext);
    const { setErrorState, errorState } = useContext<IErrorContextType>(ErrorContext);

    const sendForgetPasswordCode = useCallback(
        async (email): Promise<void> => {
            setRes({ ...apiInitialState, isLoading: true });
            try {
                await Auth.forgotPassword(email);
                setRes(getSuccessResponse<string>(email));
                setAuthState((current) => ({
                    ...current,
                    email,
                }));
            } catch (error) {
                const { message } = error;
                setRes(getErrorResponse(error?.message));
                updateErrorState({ title: passwordErrorHeading, message }, setErrorState);
            }
        },
        [errorState],
    );

    return { res, performAction: sendForgetPasswordCode };
};

export default useForgetPassword;
