import { createContext } from "react";
import { initialAuthContext } from "utils";
import { AuthContextType } from "../types/authTypes";

export const AuthContext = createContext<AuthContextType>({
  authState: initialAuthContext,
  setAuthState: () => {},
});

export default AuthContext;
