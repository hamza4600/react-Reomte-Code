import { AuthCommonLoginRegister } from "@remotebase/components";
import { UserType, AuthType } from "@remotebase/constants";
import { useSignup } from "hooks";

const SignUpForm: React.FC = () => {
  const {
    performAction,
    res: { isLoading },
  } = useSignup();

  return (
    <AuthCommonLoginRegister
      formProps={{ isLoading, performAction }}
      userType={UserType.Talent}
      authType={AuthType.SignUp}
    />
  );
};

export default SignUpForm;
