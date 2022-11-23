import { AuthRoutes as Route } from "utils";
import { useConfirmSignUp, useResendVerificationCode } from "hooks";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthCommonVerifyAccount } from "@remotebase/components";
import { AuthType, UserType } from "@remotebase/constants";

interface Prop {
  email: string | null;
}

const EmailVerificationForm: React.FC<Prop> = ({ email }) => {
  const {
    res: { success, isLoading },
    performAction,
  } = useConfirmSignUp();

  const { performAction: resendVerification } = useResendVerificationCode();

  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    if (success) history.push({ pathname: Route.CreateProfile, search });
  }, [success]);

  return (
    <AuthCommonVerifyAccount
      resendVerification={resendVerification}
      authType={AuthType.SignUp}
      userType={UserType.Talent}
      email={email}
      formProps={{
        isLoading,
        performAction,
      }}
    />
  );
};

export default EmailVerificationForm;
