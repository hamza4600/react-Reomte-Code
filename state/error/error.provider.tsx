import React, { useState } from "react";
import { IErrorStateType } from "@remotebase/constants";
import ErrorContext from "./error.context";

export const ErrorProvider: React.FC = (props) => {
  const [errorState, setErrorState] = useState<Array<IErrorStateType>>([]);

  const value = {
    errorState,
    setErrorState,
  };

  return <ErrorContext.Provider value={value}>{props.children}</ErrorContext.Provider>;
};

export default ErrorProvider;
