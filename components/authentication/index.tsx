import "assets/css/icon.css";
import { AuthType } from "utils";
import { FC, Fragment } from "react";
import { UserType } from "@remotebase/constants";
import { ForgotPassword, Login, Register, ResetPassword, Reverify } from "components";
import { AuthenticationHeader } from "@remotebase/components";

interface Props {
  authType: AuthType;
}

export const Authentication: FC<Props> = ({ authType }) => {
  const getAuthComponent = (): JSX.Element => {
    switch (authType) {
      case AuthType.Login:
        return <Login />;
      case AuthType.Register:
        return <Register />;
      case AuthType.ForgotPassword:
        return <ForgotPassword />;
      case AuthType.ResetPassword:
        return <ResetPassword />;
      case AuthType.Reverify:
        return <Reverify />;
      default:
        return <Fragment />;
    }
  };

  return <AuthenticationHeader authComponent={getAuthComponent()} userType={UserType.Talent} />;
};

export default Authentication;
