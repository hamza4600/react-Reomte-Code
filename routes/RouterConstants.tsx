import { FC } from "react";
import { RouteProps } from "react-router-dom";
import { AuthRoutes, UnAuthRoutes } from "utils";
import AuthRouter from "./AuthRouter";
import UnAuthRouter from "./UnAuthRouter";

export const UnAuthRoutesArray = Object.values(UnAuthRoutes) as Array<string>;
export const AuthRoutesArray = Object.values(AuthRoutes) as Array<string>;
export const AllRoutesArray = UnAuthRoutesArray.concat(AuthRoutesArray);

export const mainRoutes: RouteProps[] = [
    {
        path: UnAuthRoutesArray,
        exact: true,
        component: UnAuthRouter as FC,
    },
    {
        path: AuthRoutesArray,
        exact: true,
        component: AuthRouter as FC,
    },
];
