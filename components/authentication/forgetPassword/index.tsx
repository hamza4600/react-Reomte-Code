import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes as Route } from "utils";
import { AuthCommonForgetPass } from "@remotebase/components";
import { PayloadType, UserType } from "@remotebase/constants";
import { useForgetPassword } from "hooks";

export const ForgotPassword: React.FC = () => {
  const history = useHistory();
  const {
    performAction: sendCode,
    res: { success, isLoading },
  } = useForgetPassword();

  const performAction = (payload: PayloadType): Promise<void> => sendCode(payload.email);

  useEffect(() => {
    if (success) history.push(Route.ResetPassword);
  }, [success]);

  return (
    <AuthCommonForgetPass formProps={{ isLoading, performAction }} userType={UserType.Talent} />
  );
};

export default ForgotPassword;
