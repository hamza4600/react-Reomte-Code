import { FC, useEffect } from "react";
import { AuthProps, unverifiedUser, UnAuthRoutes as Route } from "utils";
import { withAuth } from "state/auth";
import { useLogin } from "hooks";
import { useHistory } from "react-router-dom";
import { AuthCommonLoginRegister } from "@remotebase/components";
import { AuthType, UserType } from "@remotebase/constants";

const Login: FC<AuthProps> = ({ getAuth }) => {
  const history = useHistory();
  const {
    performAction,
    res: { success, error, isLoading },
  } = useLogin();

  useEffect(() => {
    if (error === unverifiedUser) history.push(Route.Reverify);
    else if (success) getAuth();
  }, [success, error]);

  return (
    <AuthCommonLoginRegister
      formProps={{ isLoading, performAction }}
      userType={UserType.Talent}
      authType={AuthType.SignIn}
    />
  );
};

export default withAuth(Login);
