import { SidebarProps, SidebarType } from "utils";
import { createContext } from "react";

export const SidebarContext = createContext<SidebarProps>({
  sidebarType: SidebarType.Login,
  setSidebarType: () => {},
});

export default SidebarContext;
