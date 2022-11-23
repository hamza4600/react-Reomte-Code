import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes as Route } from "utils";
import { AuthCommonResetPass } from "@remotebase/components";
import { AuthType, UserType } from "@remotebase/constants";
import { useSubmitPassword } from "hooks";

export const ResetPassword: React.FC = () => {
  const history = useHistory();
  const {
    performAction,
    res: { success, isLoading },
  } = useSubmitPassword();

  useEffect(() => {
    if (success) history.push(Route.Login);
  }, [success]);

  return (
    <AuthCommonResetPass
      authType={AuthType.ForgotPassword}
      formProps={{ isLoading, performAction }}
      userType={UserType.Talent}
    />
  );
};

export default ResetPassword;
