import React from "react";
import { AuthType } from "utils";
import { Authentication } from "components";

export const ResetPasswordPage: React.FC = () => {
  return <Authentication authType={AuthType.ResetPassword} />;
};

export default ResetPasswordPage;
