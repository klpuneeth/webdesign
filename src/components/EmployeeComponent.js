import React from "react";
import NavbarComponent from "./atoms/navbar-component/NavbarComponent";
import SideNavbar from "./atoms/side-navbar/SideNavbar";
import AttendanceList from "./AttendanceList";

function EmployeeComponent() {
  return (
    <div>
      <NavbarComponent navbar={"AMS"} />
      <div style={{ display: "inline-flex" }}>
        <SideNavbar />
        <AttendanceList />
      </div>
    </div>
  );
}

export default EmployeeComponent;
