export const apiInitialState = {
    isLoading: false,
    data: null,
    error: null,
    success: false,
};

export const initialAuthContext = {
    isLoggedIn: null,
    email: null,
    isVerified: null,
    userId: null,
    isLoading: false,
};

export const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const refLocalKey = "referrerId";
export const marketingLocalKey = "showMarketingModal";

export enum HttpStatus {
    SUCCESS = 200,
    INTERNAL_SERVER_ERROR = 500,
}
