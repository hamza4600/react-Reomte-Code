import { SidebarType } from "utils";
import { FC, useState } from "react";
import { SidebarContext } from "./sidebar.context";

export const SidebarProvider: FC = (props) => {
  const [sidebarType, setSidebarType] = useState<SidebarType>(SidebarType.Login);
  const value = { sidebarType, setSidebarType };
  return <SidebarContext.Provider value={value}>{props.children} </SidebarContext.Provider>;
};

export default SidebarProvider;
