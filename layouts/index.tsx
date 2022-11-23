import React, { FC, Fragment } from "react";
import { Sidebar } from "components";
import AppMain from "./styles";

const SidebarLayout: FC = ({ children }) => {
    return (
        <Fragment>
            <Sidebar />
            <AppMain>{children}</AppMain>
        </Fragment>
    );
};

export default SidebarLayout;
