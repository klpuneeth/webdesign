import React from "react";
import NavbarComponent from "./atoms/navbar-component/NavbarComponent";
import SideNavbar from "./atoms/side-navbar/SideNavbar";
import LeaveComponent from "./LeaveComponent";

function LeaveTable() {
  return (
    <div>
      <NavbarComponent navbar={"AMS"} />
      <div style={{ display: "inline-flex" }}>
        <SideNavbar />
        <LeaveComponent />
      </div>
    </div>
  );
}

export default LeaveTable;
