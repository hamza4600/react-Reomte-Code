import { Auth, CognitoUser } from "@aws-amplify/auth";
import { useCallback, useContext, useState } from "react";
import {
    ApiCustomHookStateType,
    ApiHookReturnType,
    apiInitialState,
    SignPayloadType,
    getSuccessResponse,
    getErrorResponse,
} from "hooks/utils";
import { AuthContextType } from "state/types/authTypes";
import { AuthContext } from "state/auth";
import { incorrectUserPass, loginErrorHeading, unverifiedUser, userNotExists } from "utils";
import ErrorContext from "state/error/error.context";
import { IErrorContextType } from "@remotebase/constants";
import { useSentry } from "hooks/sentry";
import { updateErrorState } from "@remotebase/components";

export const useLogin = (): ApiHookReturnType<CognitoUser, SignPayloadType> => {
    const [res, setRes] = useState<ApiCustomHookStateType<CognitoUser>>(apiInitialState);
    const { setAuthState } = useContext<AuthContextType>(AuthContext);
    const { setErrorState, errorState } = useContext<IErrorContextType>(ErrorContext);
    const { sendError } = useSentry();

    const performLogin = useCallback(
        async (payload: SignPayloadType): Promise<void> => {
            const { email, password } = payload;
            setRes({ ...apiInitialState, isLoading: true });
            try {
                const response: CognitoUser = await Auth.signIn(email, password);
                setRes(getSuccessResponse<CognitoUser>(response));
            } catch (error) {
                const { message } = error;
                setRes(getErrorResponse(message));
                updateErrorState({ title: loginErrorHeading, message }, setErrorState);
                if (error?.message === unverifiedUser) {
                    await Auth.resendSignUp(email);
                    setAuthState((current) => ({
                        ...current,
                        email,
                        tempPasswd: password,
                    }));
                } else if (error?.message !== incorrectUserPass && error?.message !== userNotExists) {
                    sendError(error, { email, password });
                }
            }
        },
        [errorState],
    );
    return { res, performAction: performLogin };
};

export default useLogin;
