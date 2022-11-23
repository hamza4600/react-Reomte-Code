import { Auth } from "aws-amplify";
import React, { useCallback, useContext, useEffect } from "react";
import { AuthContextType } from "state/types/authTypes";
import { AuthContext } from "state/auth";
import { UserRoles } from "API";
import { authFailedErrorHeading, authFailedErrorMessage, AuthProps } from "utils";
import { IErrorContextType } from "@remotebase/constants";
import ErrorContext from "state/error/error.context";
import { useUpdateUserAttributes } from "hooks";
import { updateErrorState } from "@remotebase/components";
import { initialAuthContext } from "../../utils/constants/authentication";

export function withAuth<T>(Component: React.FC<T & AuthProps>): React.FC<T> {
  const AuthConsumer: React.FC = (props: T) => {
    const { authState, setAuthState } = useContext<AuthContextType>(AuthContext);
    const { setErrorState } = useContext<IErrorContextType>(ErrorContext);
    const { isLoggedIn, isLoading } = authState;
    const { performAction } = useUpdateUserAttributes();
    const getAuth = useCallback(async (): Promise<void> => {
      try {
        setAuthState({ ...initialAuthContext, isLoading: true });
        await Auth.currentAuthenticatedUser();
        const data = await Auth.currentUserInfo();
        const { attributes } = data || {};
        if (attributes["custom:role"] === UserRoles.RECRUITER) {
          Auth.signOut();
          updateErrorState(
            { title: authFailedErrorHeading, message: authFailedErrorMessage },
            setErrorState,
          );
        } else {
          setAuthState({
            isLoggedIn: true,
            email: attributes.email,
            isVerified: attributes.email_verified,
            userId: attributes.sub,
            isLoading: false,
            tempPasswd: null,
          });
        }
        if (!attributes["custom:role"]) {
          performAction({ "custom:role": UserRoles.TALENT });
        }
      } catch (error) {
        Auth.signOut();
        setAuthState({ ...initialAuthContext, isLoading: false, isLoggedIn: false });
      }
    }, []);

    useEffect(() => {
      if ((isLoggedIn === null && !isLoading) || authState.tempPasswd === "") {
        getAuth();
      }
    }, [authState.isLoggedIn]);

    const authProps = {
      authState,
      setAuthState,
      getAuth,
    };

    return <Component {...props} {...authProps} />;
  };
  return AuthConsumer;
}
export default withAuth;
