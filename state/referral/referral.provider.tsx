import React, { useState } from "react";
import { IReferralData } from "./referral.interface";
import { RefDetailsContext } from "./referral.context";

export const ReferralProvider: React.FC = (props) => {
  const [refDetails, setRefDetails] = useState<IReferralData>(null);

  const value = { refDetails, setRefDetails };

  return <RefDetailsContext.Provider value={value}>{props.children} </RefDetailsContext.Provider>;
};

export default ReferralProvider;
