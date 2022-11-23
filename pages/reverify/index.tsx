import React from "react";
import { AuthType } from "utils";
import { Authentication } from "components";

export const ReverifyPage: React.FC = () => {
  return <Authentication authType={AuthType.Reverify} />;
};

export default ReverifyPage;
