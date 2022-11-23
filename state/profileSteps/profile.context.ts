import { createContext } from "react";
import { ProfileContextType } from "./profileSteps.interface";

export const ProfileContext = createContext<ProfileContextType>({
  profileState: { isLoading: false },
  setProfileState: (): void => {},
});

export default ProfileContext;
