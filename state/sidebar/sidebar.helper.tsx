import { SidebarType as Type, Sidebar, SidebarStatusIcons, AuthRoutes as Route } from "utils";
import { ISidebarMenu } from "./sidebar.interface";
import {
  CodeTestingIcon,
  HRScreeningIcon,
  Make250Icon,
  OverviewIcon,
  ProfileIcon,
  SettingsIcon,
  LiveCodingIcon,
  OfferIcon,
  NetworkIcon,
  BookingIcon,
} from "../../assets/icons";

export const sidebarIcons = {
  [Sidebar.Overview]: <OverviewIcon />,
  [Sidebar.Profile]: <ProfileIcon />,
  [Sidebar.DomainTesting]: <CodeTestingIcon />,
  [Sidebar.HRScreening]: <HRScreeningIcon />,
  [Sidebar.ProblemSolving]: <LiveCodingIcon />,
  [Sidebar.FinalInterview]: <OfferIcon />,
  [Sidebar.Make300]: <Make250Icon />,
  [Sidebar.Settings]: <SettingsIcon />,
  [Sidebar.SignUp]: <OverviewIcon />,
  [Sidebar.Resume]: <CodeTestingIcon />,
  [Sidebar.FinishSignUp]: <HRScreeningIcon />,
  [Sidebar.Network]: <NetworkIcon />,
  [Sidebar.Jobs]: <OverviewIcon />,
  [Sidebar.Chat]: <OverviewIcon />,
  [Sidebar.Bookings]: <BookingIcon />,
};

export const getStatus = (index: number, stageLevel: number): string => {
  if (stageLevel < 0 && index === Math.abs(stageLevel) - 1) {
    return SidebarStatusIcons.Cross;
  }
  if (index > -1 && index < Math.abs(stageLevel)) {
    return SidebarStatusIcons.Tick;
  }
  if (
    (stageLevel > -1 && index > stageLevel) ||
    (stageLevel < 0 && index > Math.abs(stageLevel) - 1)
  ) {
    return SidebarStatusIcons.Lock;
  }
  return SidebarStatusIcons.Normal;
};

export const sidebarRoutes = {
  [Sidebar.Profile]: Route.UserProfile,
  [Sidebar.Bookings]: Route.Bookings,
  [Sidebar.Overview]: Route.Dashbord,
  [Sidebar.DomainTesting]: Route.DomainTests,
  [Sidebar.ProblemSolving]: Route.ProblemSolving,
  [Sidebar.Resume]: Route.CreateProfile,
  [Sidebar.Make300]: Route.Referral,
  [Sidebar.FinishSignUp]: Route.FinishSignUp,
  [Sidebar.HRScreening]: Route.hrScreening,
  [Sidebar.FinalInterview]: Route.finalTechInterview,
  [Sidebar.Network]: Route.Network,
  [Sidebar.Jobs]: Route.Jobs,
  [Sidebar.Chat]: Route.Chat,
};

export const SidebarProfileOptions = [
  Sidebar.DomainTesting,
  Sidebar.HRScreening,
  Sidebar.ProblemSolving,
  Sidebar.FinalInterview,
  Sidebar.Network,
];
export const SidebarCreateProfileOptions = [Sidebar.Resume, Sidebar.FinishSignUp];

export const sidebarMenu: ISidebarMenu = {
  [Type.Dashboard]: [Sidebar.Overview, Sidebar.Profile, SidebarProfileOptions],
  [Type.Create_Profile]: [Sidebar.SignUp, SidebarCreateProfileOptions],
};
