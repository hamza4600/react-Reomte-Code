import { useLazyQuery, useMutation } from "@apollo/client";
import { getQuery } from "hooks/utils";
import {
    ListCalendarBookingsQuery,
    ListCalendarBookingsQueryVariables,
    SubmitCalendarBookingMutation,
    SubmitCalendarBookingMutationVariables,
} from "@remotebase/amplify-constants/API";
import { submitCalendarBooking } from "@remotebase/amplify-constants/graphql/mutations";
import { ReturnPropsSubmitCalendarBooking, ReturnPropsListCalendarBooking } from "hooks/types";
import { listCalendarBookingsForDeveloper } from "@remotebase/amplify-constants/modified";

export const useSubmitCalendarBooking = (): ReturnPropsSubmitCalendarBooking => {
    const [submitBooking, { data, loading, error }] = useMutation<
        SubmitCalendarBookingMutation,
        SubmitCalendarBookingMutationVariables
    >(getQuery(submitCalendarBooking));
    const result = data?.submitCalendarBooking || null;

    return {
        submitBooking,
        loading,
        result,
        error: error?.message,
    };
};

export const useListCalendarBooking = (): ReturnPropsListCalendarBooking => {
    const [listBooking, { data, loading, error }] = useLazyQuery<
        ListCalendarBookingsQuery,
        ListCalendarBookingsQueryVariables
    >(getQuery(listCalendarBookingsForDeveloper));
    const result = data?.listCalendarBookings?.items || null;

    return {
        listBooking,
        loading,
        result,
        error: error?.message,
    };
};

export default useSubmitCalendarBooking;
