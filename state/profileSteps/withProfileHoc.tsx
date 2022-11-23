import { getTalentProfile } from "hooks";
import withApolloProvider from "hooks/apollo/withApollo";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "state/auth";
import { useIntercom } from "react-use-intercom";
import { AuthContextType } from "state/types/authTypes";
import { ProfileProps, shouldUseIntercom } from "utils";
import { IProfile, ProfileContextType, IProfileDetails } from "./profileSteps.interface";
import { ProfileContext } from "./profile.context";

export function withProfile<T>(Component: React.FC<T & ProfileProps>): React.FC<T> {
  return withApolloProvider((props: T) => {
    const { profileState, setProfileState } = useContext<ProfileContextType>(ProfileContext);
    const { update } = useIntercom();
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const {
      authState: { userId },
    } = useContext<AuthContextType>(AuthContext);
    const { getProfile, profileData, error, loading } = getTalentProfile();

    const refetchProfile = useCallback((): void => {
      if (userId) {
        setProfileState({ isLoading: true });
        getProfile({ variables: { id: userId } });
      }
    }, [userId]);

    const updateUserProfile = (profile: IProfileDetails): void => {
      if (profileState?.data) {
        const { fullName, email } = profileState?.data;
        if (fullName && email)
          setProfileState({ ...profileState, data: { ...profileState.data, profile } });
      }
    };

    const updateIntercom = (): void => {
      const { fullName, email } = profileState?.data || {};
      if (fullName && email && shouldUseIntercom) update({ email, name: fullName });
    };

    const cleanProfileState = (): void => {
      setProfileState({ isLoading: false });
    };

    const updateUserInfo = (data: IProfile): void => {
      setProfileState({ ...profileState, data });
    };

    const updateHrStatus = (): void => {
      const engProfile = profileState.data?.profile;
      if (
        engProfile?.isAvailable &&
        engProfile.id &&
        engProfile.version &&
        profileState.data?.fullName
      ) {
        // version needs to be updated in local state while updating isPassHr
        const updatedversion = engProfile.version + 1;
        setProfileState({
          ...profileState,
          data: {
            ...profileState.data,
            profile: { ...engProfile, version: updatedversion, isPassHR: true },
          },
        });
      }
    };

    useEffect(() => {
      if (profileState.data === undefined) refetchProfile();
    }, [userId]);

    useEffect(() => {
      if (profileState?.data) updateIntercom();
    }, [profileState]);

    useEffect(() => {
      if (!loading && shouldUpdate) {
        if (profileData)
          setProfileState({ data: profileData as IProfile, isLoading: false, error: undefined });
        else if (error) setProfileState({ isLoading: false, error, data: null });
        setShouldUpdate(false);
      }
    }, [profileData, loading, error]);

    useEffect(() => {
      if (loading) setShouldUpdate(true);
    }, [loading]);

    const profileProps: ProfileProps = {
      profileState: { ...profileState },
      refetchProfile,
      updateUserProfile,
      updateUserInfo,
      updateHrStatus,
      cleanProfileState,
    };
    return <Component {...props} {...profileProps} />;
  });
}
export default withProfile;
