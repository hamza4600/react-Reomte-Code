import withApolloProvider from "hooks/apollo/withApollo";
import {
    ForgotPasswordPage,
    LandingPage,
    LoginPage,
    MaintenancePage,
    NotFound,
    ResetPasswordPage,
    ReverifyPage,
    SignUpPage,
} from "pages";
import { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { withAuth } from "state/auth";
import { AuthProps, AuthRoutes, shouldShowMaintenence, UnAuthRoutes as path } from "utils";

const UnAuthRouter: React.FC<AuthProps> = ({ authState: { isLoggedIn } }) => {
    const { pathname } = useLocation();
    const history = useHistory();

    const isMaintenance = (): void => {
        if (pathname !== path.Maintenance && pathname !== path.Landing)
            history.replace(path.Maintenance);
    };

    useEffect(() => {
        if (shouldShowMaintenence) isMaintenance();
        else if (pathname === path.Maintenance) {
            if (isLoggedIn) history.replace(AuthRoutes.Dashbord);
            else history.replace(path.Login);
        }
    }, []);
    return (
        <Switch>
            <Route exact path={path.Maintenance} component={MaintenancePage} />
            <Route exact path={path.Landing} component={LandingPage} />
            <Route exact path={path.Login} component={LoginPage} />
            <Route exact path={path.ForgotPassword} component={ForgotPasswordPage} />
            <Route exact path={path.ResetPassword} component={ResetPasswordPage} />
            <Route exact path={path.Register} component={SignUpPage} />
            <Route exact path={path.Reverify} component={ReverifyPage} />
            <Route exact path={path.NotFound} component={NotFound} />
        </Switch>
    );
};

export default withApolloProvider(withAuth(UnAuthRouter));
