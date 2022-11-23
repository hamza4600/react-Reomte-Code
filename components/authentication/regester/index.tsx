import { FC, Fragment, useMemo } from "react";
import { withAuth } from "state/auth";
import { AuthProps } from "utils";
import EmailVerificationForm from "./EmailVerificationForm";
import SignUpForm from "./SignUpForm";

const Register: FC<AuthProps> = ({ authState }) => {
  const { email, isVerified } = authState || {};

  const getForm = useMemo(
    () => (email && !isVerified ? <EmailVerificationForm email={email} /> : <SignUpForm />),
    [email, isVerified],
  );

  return <Fragment>{getForm}</Fragment>;
};

export default withAuth(Register);
