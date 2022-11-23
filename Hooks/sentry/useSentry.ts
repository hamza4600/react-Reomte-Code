import * as Sentry from "@sentry/react";
import { sentryDSN } from "utils";

type UseSentryReturnType = {
    sendError: (exception: unknown, data?) => void;
};

export const useSentry = (): UseSentryReturnType => {
    const sendError = (exception: unknown, context = null): void => {
        if (!sentryDSN) return;
        if (context !== null) Sentry.setContext("context", context);
        Sentry.captureException(exception);
    };
    return { sendError };
};

export default useSentry;
