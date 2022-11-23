import withApolloProvider from "hooks/apollo/withApollo";
import React, { useContext, useMemo } from "react";
import { ReferralStages as RefStatus } from "@remotebase/constants";
import { initialRefStatusValues, RefProps } from "utils";
import { RefDetailsContext } from "./referral.context";
import { IReferralStats } from "./referral.interface";

export function withReferral<T>(Component: React.FC<T & RefProps>): React.FC<T> {
  return withApolloProvider((props: T) => {
    const { refDetails, setRefDetails } = useContext(RefDetailsContext);

    const getStatusLength = (type: string): number =>
      refDetails?.filter((e) => e?.status === type).length || 0;

    const combinedRefData = useMemo(() => {
      const output = initialRefStatusValues;
      Object.values(RefStatus).forEach((status) => {
        output[status] = getStatusLength(status);
      });
      output[RefStatus.Total] = Object.values(RefStatus)
        .filter((e) => e !== RefStatus.Total)
        .reduce((partialSum, a) => partialSum + getStatusLength(a), 0);
      return output;
    }, [refDetails]);

    const emailList = useMemo(() => {
      const output = [] as Array<string>;
      refDetails?.forEach((ele) => {
        if (ele?.email) output.push(ele.email);
      });
      return output;
    }, [refDetails]);

    const addEmails = (emails: Array<string>): void => {
      const output = refDetails || [];
      const emailsData = [] as Array<IReferralStats>;
      emails.forEach((email) => emailsData.push({ email }));
      setRefDetails([...output, ...emailsData]);
    };

    const updateCanReInvite = (email: string): void => {
      const output = refDetails || [];
      const emailsData = [] as Array<IReferralStats>;
      output.forEach((ref) => {
        if (ref?.email === email) {
          emailsData.push({ email: ref.email, status: ref.status, canReinvite: false });
        } else if (ref) emailsData.push(ref);
      });
      setRefDetails([...emailsData]);
    };

    const profileProps: RefProps = {
      refDetails,
      setRefDetails,
      combinedRefData,
      emailList,
      addEmails,
      updateCanReInvite,
    };
    return <Component {...props} {...profileProps} />;
  });
}
export default withReferral;
