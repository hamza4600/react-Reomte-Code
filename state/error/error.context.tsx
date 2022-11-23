import { createContext } from "react";
import { IErrorContextType } from "@remotebase/constants";

const ErrorContext = createContext<IErrorContextType>({
  setErrorState: () => {},
  errorState: [],
});

export default ErrorContext;
