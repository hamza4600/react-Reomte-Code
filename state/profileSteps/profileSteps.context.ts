import { createContext } from "react";
import { IProfileTalent, IProfileUpdate } from "./profileSteps.interface";

export const ProfileStepContext = createContext({
  currentStep: 0,
  updateStep: (step: number) => {
    console.log("PROFILE STEP: ", step);
  },
});

export const ProfilePageContext = createContext({
  profilePage: 1,
  setProfilePage: (page: number) => {
    console.log("PROFILE PAGE NO: ", page);
  },
});

export const ProfileTalentContext = createContext({
  talent: { isAvailable: true } as IProfileTalent,
  setTalent: (talent: IProfileUpdate) => {
    console.log("PROFILE Talent: ", talent);
  },
});
