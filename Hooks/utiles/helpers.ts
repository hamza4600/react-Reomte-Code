import { DocumentNode, gql } from "@apollo/client";
import { GetSuccessResponseType, ApiCustomHookStateType } from "./types";
import { apiInitialState } from "./constants";

export const getQuery = (query: string): DocumentNode => gql`
  ${query}
`;

export const getSuccessResponse = <T>(data: T): GetSuccessResponseType<T> => {
    return {
        ...apiInitialState,
        data,
        success: true,
        isLoading: false,
    };
};

export function getErrorResponse<T>(errorMsg: string): ApiCustomHookStateType<T> {
    return {
        ...apiInitialState,
        success: false,
        isLoading: false,
        error: errorMsg || "An error occurred, try again later.",
    };
}
