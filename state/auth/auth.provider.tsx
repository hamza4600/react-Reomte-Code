import React, { useState } from "react";
import { initialAuthContext } from "utils";
import { AuthContext } from "state/auth";
import { AuthStateType } from "../types/authTypes";

export const AuthProvider: React.FC = (props) => {
  const [authState, setAuthState] = useState<AuthStateType>(initialAuthContext);

  const value = {
    authState,
    setAuthState,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
