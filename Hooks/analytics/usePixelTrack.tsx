import { FBPixeEventTypes, FBPixelCustomEvents } from "@remotebase/constants";
import { useAnalytics } from "utils";
import { RemotebaseWindow } from "hooks/types";
import { useCallback } from "react";

type UsePixelTrackRerturnType = {
    performAction: (eventName: FBPixelCustomEvents, properties?: string) => void;
};

export const usePixelTrack = (): UsePixelTrackRerturnType => {
    const win: RemotebaseWindow = window;
    const trackPixelEvent = useCallback(
        (eventName: FBPixelCustomEvents, properties?: string) => {
            if (useAnalytics && win.fbq) {
                win.fbq(FBPixeEventTypes.TRACK_CUSTOM, eventName, properties);
            }
        },
        [useAnalytics, win.fbq],
    );
    return { performAction: trackPixelEvent };
};

export default { usePixelTrack };
