import { Auth } from "@aws-amplify/auth";
import { useCallback, useState } from "react";
import {
    ApiCustomHookStateType,
    ApiHookReturnType,
    apiInitialState,
    UserAttributes,
} from "hooks/utils";

export const useUpdateUserAttributes = (): ApiHookReturnType<string, UserAttributes> => {
    const [res, setRes] = useState<ApiCustomHookStateType<string>>(apiInitialState);

    const performLogin = useCallback(async (payload: UserAttributes): Promise<void> => {
        setRes({ ...apiInitialState, isLoading: true });
        try {
            const user = await Auth.currentAuthenticatedUser();
            await Auth.updateUserAttributes(user, {
                ...payload,
            });
        } catch (error) {
            console.error(error);
        }
    }, []);
    return { res, performAction: performLogin };
};

export default useUpdateUserAttributes;
