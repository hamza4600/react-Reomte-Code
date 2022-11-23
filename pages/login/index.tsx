import { AuthType } from "utils";
import { Authentication } from "components";
import { FC } from "react";

const LoginPage: FC = () => {
  return <Authentication authType={AuthType.Login} />;
};

export default LoginPage;
