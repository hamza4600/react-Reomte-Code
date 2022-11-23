import { AnalyticsMetricsFrontEnd, RemoteBaseAnalyticsEvents } from "@remotebase/constants";
import { RemotebaseWindow } from "hooks/types";
import { useCallback } from "react";
import { useAnalytics } from "utils";

type UseAnalyticsEventCreatorRerturnType = {
    performAction: (
        eventName: RemoteBaseAnalyticsEvents,
        properties?: AnalyticsMetricsFrontEnd,
    ) => void;
};

export const useAnalyticsEventCreator = (): UseAnalyticsEventCreatorRerturnType => {
    const win: RemotebaseWindow = window;
    const cb = async (
        eventName: RemoteBaseAnalyticsEvents,
        properties: AnalyticsMetricsFrontEnd,
    ): Promise<void> => {
        if (useAnalytics) {
            win.analytics?.track(eventName, properties);
        } else {
            console.info("would have sent following event to segment ", { eventName, properties });
        }
    };
    const callback = useCallback(cb, [win.analytics, useAnalytics]);
    return { performAction: callback };
};

export default useAnalyticsEventCreator;
