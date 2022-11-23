import { RemotebaseWindow } from "hooks/types";
import { useCallback } from "react";
import { useAnalytics } from "utils";

type UseAnalyticsPageEventCreatorRerturnType = {
    performAction: (pathName: string) => void;
};

export const useAnalyticsPageEventCreator = (): UseAnalyticsPageEventCreatorRerturnType => {
    const win: RemotebaseWindow = window;
    const cb = async (pathName: string): Promise<void> => {
        if (useAnalytics) {
            win.analytics?.page(pathName, { url: win.location.href });
        }
    };
    const callback = useCallback(cb, [win.analytics, useAnalytics]);
    return { performAction: callback };
};

export default useAnalyticsPageEventCreator;
