import { AuthType } from "utils";
import { Authentication } from "components";
import { FC } from "react";
import useLocalStorage from "hooks/utils/localStorage";
import { useLocation } from "react-router-dom";
import { refLocalKey } from "hooks/utils";

const SignUpPage: FC = () => {
  const { setItem } = useLocalStorage();
  const referralShortUUID = new URLSearchParams(useLocation().search).get("referral");
  if (referralShortUUID) setItem(refLocalKey, referralShortUUID);

  return <Authentication authType={AuthType.Register} />;
};

export default SignUpPage;
