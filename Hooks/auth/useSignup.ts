import { Auth, CognitoUser } from "@aws-amplify/auth";
import { AuthContext } from "state/auth";
import { AuthContextType } from "state/types/authTypes";
import { useCallback, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    ApiCustomHookStateType,
    apiInitialState,
    SignPayloadType,
    ApiHookReturnType,
    SignUpResponse,
    getSuccessResponse,
    getErrorResponse,
    refLocalKey,
} from "hooks/utils";
import { UserRoles } from "API";
import ErrorContext from "state/error/error.context";
import { IErrorContextType } from "@remotebase/constants";
import { signUpErrorHeading } from "utils";
import useLocalStorage from "hooks/utils/localStorage";
import { updateErrorState } from "@remotebase/components";

export const useSignup = (): ApiHookReturnType<CognitoUser, SignPayloadType> => {
    const referralShortUUID = new URLSearchParams(useLocation().search).get("referral");
    const [res, setRes] = useState<ApiCustomHookStateType<CognitoUser>>(apiInitialState);
    const { setItem } = useLocalStorage();
    const { setAuthState } = useContext<AuthContextType>(AuthContext);
    const { setErrorState, errorState } = useContext<IErrorContextType>(ErrorContext);

    const performSignUp = useCallback(
        async (payload: SignPayloadType): Promise<void> => {
            const { email, password } = payload;
            setRes({ ...apiInitialState, isLoading: true });
            try {
                const response: SignUpResponse = await Auth.signUp({
                    username: email,
                    password,
                    attributes: {
                        email,
                        "custom:role": UserRoles.TALENT,
                    },
                });
                if (referralShortUUID) setItem(refLocalKey, referralShortUUID);
                setRes(getSuccessResponse<CognitoUser>(response.user));
                setAuthState((current) => ({
                    ...current,
                    email: response.user.getUsername(),
                    isVerified: false,
                    tempPasswd: password,
                }));
            } catch (error) {
                const { message } = error;
                setRes(getErrorResponse(message));
                updateErrorState({ title: signUpErrorHeading, message }, setErrorState);
            }
        },
        [errorState],
    );
    return { res, performAction: performSignUp };
};

export default useSignup;
