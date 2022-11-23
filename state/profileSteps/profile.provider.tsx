import React, { useState } from "react";
import { IProfileState } from ".";
import { ProfileContext } from "./profile.context";

export const ProfileProvider: React.FC = (props) => {
  const [profileState, setProfileState] = useState<IProfileState>({ isLoading: false });

  const value = {
    profileState,
    setProfileState,
  };

  return <ProfileContext.Provider value={value}>{props.children} </ProfileContext.Provider>;
};

export default ProfileProvider;
