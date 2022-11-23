import { SidebarProps } from "utils";
import React, { useContext } from "react";
import { SidebarContext } from "./sidebar.context";

export function withSidebar<T>(Component: React.FC<T & SidebarProps>): React.FC<T> {
  const SidebarConsumer: React.FC = (props: T) => {
    const { sidebarType, setSidebarType } = useContext<SidebarProps>(SidebarContext);

    const sidebarProps = {
      sidebarType,
      setSidebarType,
    };

    return <Component {...props} {...sidebarProps} />;
  };
  return SidebarConsumer;
}
export default withSidebar;
