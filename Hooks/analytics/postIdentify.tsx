import { RemotebaseWindow } from "hooks/types";
import { useCallback } from "react";
import { IProfile } from "state/profileSteps";
import { useAnalytics } from "utils";

type PostIdentifyEventCreatorRerturnType = {
    performAction: (userId: string, attributes: IProfile) => void;
};

export const postIdentify = (): PostIdentifyEventCreatorRerturnType => {
    const win: RemotebaseWindow = window;
    const cb = async (userId: string, attributes: IProfile): Promise<void> => {
        if (useAnalytics) {
            await win.analytics?.identify(userId, attributes);
        } else {
            console.info("would have sent following event to identify ", { userId, attributes });
        }
    };

    const callback = useCallback(cb, [win.analytics, useAnalytics]);
    return { performAction: callback };
};

export default postIdentify;
