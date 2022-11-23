import { createContext } from "react";
import { IReferralData } from "./referral.interface";

export const RefDetailsContext = createContext({
  refDetails: null as IReferralData,
  setRefDetails: (details: IReferralData) => {
    console.log("REF DETAILS: ", details);
  },
});

export default RefDetailsContext;
