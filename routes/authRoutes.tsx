import withApolloProvider from "hooks/apollo/withApollo";
import SidebarLayout from "layouts/sidebar_layout";
import {
  DashboardPage,
  TestsPage,
  ProblemSolvingPage,
  CreateProfilePage,
  FinishSignUpPage,
  NotFound,
  HrScreeningPage,
  FinalTechInterview,
  ReferralPage,
  TalentNetworkPage,
  SelfSchedulePage,
  TalentMatchOpportunities,
  TalentOpportunityDetails,
  ChatPage,
  UserProfile,
  InterviewBookings,
  MaintenancePage,
} from "pages";
import { Fragment, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { FullPageLoader } from "components";
import { ShouldRender } from "@remotebase/components";
import { withSidebar } from "state/sidebar";
import withProfile from "state/profileSteps/withProfileHoc";
import {
  ProfileProps,
  combineHOCs,
  AuthRoutes as path,
  SidebarProps,
  SidebarType,
  shouldShowMaintenence,
} from "utils";

interface Props extends ProfileProps, SidebarProps { }
const AuthRouter: React.FC<Props> = (props) => {
  const {
    profileState: { data, isLoading, error },
    setSidebarType,
  } = props;
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (shouldShowMaintenence) {
      history.replace(path.Maintenance);
    } else if (!isLoading) {
      setSidebarType(SidebarType.Dashboard);
      if (!data && pathname !== path.CreateProfile) {
        history.replace(path.CreateProfile);
        setSidebarType(SidebarType.Create_Profile);
      } else if (data && !data.profile && pathname !== path.FinishSignUp) {
        history.replace(path.FinishSignUp);
        setSidebarType(SidebarType.Create_Profile);
      } else if (pathname === path.CreateProfile || pathname === path.FinishSignUp) {
        if (data?.profile) history.replace(path.Dashbord);
        else setSidebarType(SidebarType.Create_Profile);
      }
    }
  }, [isLoading, data, error]);

  return (
    <Fragment>
      <ShouldRender if={isLoading}>
        <FullPageLoader />
      </ShouldRender>

      <ShouldRender if={!isLoading && data !== undefined}>
        <Switch>
          <Route exact path={path.Chat} component={ChatPage} />
          <Route exact path={path.Maintenance} component={MaintenancePage} />
          <ThemeProvider theme={theme}>
            <SidebarLayout>
              <Route exact path={path.CreateProfile} component={CreateProfilePage} />
              <Route exact path={path.FinishSignUp} component={FinishSignUpPage} />
              <Route exact path={path.Dashbord} component={DashboardPage} />
              <Route exact path={path.DomainTests} component={TestsPage} />
              <Route exact path={path.ProblemSolving} component={ProblemSolvingPage} />
              <Route exact path={path.hrScreening} component={HrScreeningPage} />
              <Route exact path={path.finalTechInterview} component={FinalTechInterview} />
              <Route exact path={path.NotFound} component={NotFound} />
              <Route exact path={path.Referral} component={ReferralPage} />
              <Route exact path={path.Network} component={TalentNetworkPage} />
              <Route exact path={path.SelfSchedule} component={SelfSchedulePage} />
              <Route exact path={path.Jobs} component={TalentMatchOpportunities} />
              <Route exact path={path.Job} component={TalentOpportunityDetails} />
              <Route exact path={path.UserProfile} component={UserProfile} />
              <Route exact path={path.Bookings} component={InterviewBookings} />
            </SidebarLayout>
          </ThemeProvider>
        </Switch>
      </ShouldRender>
    </Fragment>
  );
};

export default combineHOCs(withProfile, withApolloProvider, withSidebar)(AuthRouter);
