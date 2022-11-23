import { AuthProps, AuthRoutes, shouldShowMaintenence, UnAuthRoutes } from "utils";
import { FullPageLoader } from "components";
import { isValidRoute, ShouldRender, ToastContainer } from "@remotebase/components";
import { LogoutPage } from "pages";
import React, { Fragment, useEffect, useState } from "react";
import { Route, RouteProps, Switch, useHistory, useLocation } from "react-router-dom";
import { withAuth } from "state/auth";
import { ProfileProvider } from "state/profileSteps";
import SidebarProvider from "state/sidebar/sidebar.provider";
import { useAnalyticsPageEventCreator } from "hooks/analytics";
import withError from "state/error/withErrorHoc";
import { ErrorProps } from "@remotebase/constants";
import { AuthRoutesArray, mainRoutes, UnAuthRoutesArray, AllRoutesArray } from "./RoutesConstants";

const MainRouter: React.FC<AuthProps & ErrorProps> = ({
    authState: { isLoading, isLoggedIn, email },
    ...rest
}) => {
    const [pathFound, handlePathFound] = useState(false);
    const history = useHistory();
    const { pathname, search } = useLocation();
    const { performAction: trackPageEvent } = useAnalyticsPageEventCreator();

    useEffect(() => {
        if (AllRoutesArray.includes(pathname)) {
            trackPageEvent(pathname);
        }
    }, [pathname]);

    const redirectToValidRoute = (): void => {
        if (shouldShowMaintenence) {
            if (pathname === UnAuthRoutes.Landing) history.replace(UnAuthRoutes.Landing);
            else history.replace(AuthRoutes.Maintenance);
        } else {
            const queryParams = new URLSearchParams(search);
            const term = queryParams.get("redirectUrl");
            if (term) history.replace(term);
            else history.replace(AuthRoutes.Dashbord);
        }
    };

    const redirectToInValidRoute = (): void => {
        if (pathname.includes("self-schedule"))
            history.replace({ pathname: UnAuthRoutes.Login, search: `?redirectUrl=${pathname}` });
        else history.replace(UnAuthRoutes.Login);
    };

    useEffect(() => {
        if (typeof isLoggedIn === "boolean" && !isLoading) {
            if (isLoggedIn && !isValidRoute(AuthRoutesArray, pathname)) redirectToValidRoute();
            else if (
                (!isLoggedIn && !UnAuthRoutesArray.includes(pathname)) ||
                (!email && (pathname === UnAuthRoutes.Reverify || pathname === UnAuthRoutes.ResetPassword))
            )
                redirectToInValidRoute();

            handlePathFound(true);
        }
    }, [isLoading, isLoggedIn, email]);

    return (
        <Fragment>
            <ToastContainer {...rest} />
            <ShouldRender if={!pathFound}>
                <FullPageLoader />
            </ShouldRender>

            <ShouldRender if={pathFound}>
                <ProfileProvider>
                    <SidebarProvider>
                        <Switch>
                            <Route exact path="/logout" component={LogoutPage} />
                            {mainRoutes.map((route: RouteProps, index: number) => (
                                <Route key={`${index}`} {...route} />
                            ))}
                        </Switch>
                    </SidebarProvider>
                </ProfileProvider>
            </ShouldRender>
        </Fragment>
    );
};

export default withError(withAuth(MainRouter));
