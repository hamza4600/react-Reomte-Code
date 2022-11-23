import { useMemo } from "react";
import { IProfile, IProfileTalent, IProfileStepContext } from "./profileSteps.interface";

export const updateProfileStep = (context: IProfileStepContext, level: number): void => {
  const { currentStep, updateStep } = context;
  updateStep(currentStep < level ? currentStep + 1 : currentStep);
};

export const ProfileOptions = <InputType, FunctionType>(
  T: InputType,
  getTag: (e: FunctionType) => JSX.Element,
  dependency?: unknown,
): Array<JSX.Element> =>
  useMemo(() => Object.values(T).map((e: FunctionType) => getTag(e)), [T, dependency]);

export const getEngProfileLevel = (profileInfo?: IProfileTalent | null): number => {
  if (profileInfo) {
    if (!profileInfo?.experience || parseInt(profileInfo.experience, 10) < 1) return 0;
    if (!profileInfo?.resumeLink) return 1;
    if (!profileInfo?.englishProficiency) return 2;
    if (!profileInfo?.interests) return 3;
    if (!profileInfo?.currentSalary && !profileInfo?.expectedSalary) return 4;
    if (!profileInfo?.heardFrom) return 5;
    return 6;
  }
  return 0;
};

export const getProfileLevel = (profile?: IProfile | null): number => {
  if (profile?.id) return 1;
  return 0;
};
