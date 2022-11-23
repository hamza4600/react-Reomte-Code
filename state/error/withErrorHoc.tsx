import React, { useContext } from "react";
import { updateErrorState } from "@remotebase/components";
import { ErrorProps, IErrorContextType, IErrorStateType } from "@remotebase/constants";
import ErrorContext from "./error.context";

function withError<T>(Component: React.FC<T & ErrorProps>): React.FC<T> {
  const ErrorConsumer: React.FC = (props: T) => {
    const { errorState, setErrorState } = useContext<IErrorContextType>(ErrorContext);

    const showError = (data: IErrorStateType): void => {
      updateErrorState(data, setErrorState);
    };

    const errorProps = {
      errorState,
      showError,
      setErrorState,
    };

    return <Component {...props} {...errorProps} />;
  };
  return ErrorConsumer;
}
export default withError;
