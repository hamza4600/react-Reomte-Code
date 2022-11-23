import React, { useEffect } from "react";
import { AuthProps, AuthRoutes as Route } from "utils";
import { withAuth } from "state/auth";
import { AuthCommonVerifyAccount } from "@remotebase/components";
import { useHistory } from "react-router-dom";
import { useConfirmSignUp, useResendVerificationCode } from "hooks";
import { AuthType, UserType } from "@remotebase/constants";

export const Reverify: React.FC<AuthProps> = ({ authState }) => {
  const {
    performAction,
    res: { success, isLoading },
  } = useConfirmSignUp();
  const history = useHistory();

  useEffect(() => {
    if (success) history.push(Route.CreateProfile);
  }, [success]);
  const { performAction: resendVerification } = useResendVerificationCode();
  return (
    <AuthCommonVerifyAccount
      resendVerification={resendVerification}
      authType={AuthType.Reverify}
      userType={UserType.Talent}
      email={authState.email}
      formProps={{
        isLoading,
        performAction,
      }}
    />
  );
};

export default withAuth(Reverify);
