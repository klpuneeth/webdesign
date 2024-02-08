import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonComponent from "../button-component/ButtonComponent";

function NavbarComponent({ navbar = "navbar" }) {
  return (
    <div>
      {" "}
      <Navbar
        bg="light"
        data-bs-theme="light"
        style={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 0px 16px #00000029",
          borderRadius: "0px 0px 24px 24px",
          opacity: 1,
        }}
      >
        <Container>
          <Navbar.Brand
            href="/employee"
            style={{ fontWeight: "bolder", fontSize: 28 }}
          >
            {navbar}
          </Navbar.Brand>
          <Nav>
            <div className="d-flex justify-content float-end">
              <ButtonComponent
                button={"Punch In"}
                width={118}
                height={40}
                // background="#0D8D16 0% 0% no-repeat padding-box"
                border="#0D8D16"
                opacity={1}
                backgroundColor={"#0D8D16"}
              />
              <ButtonComponent
                className="ms-3"
                button={"Punch Out"}
                width={128}
                height={40}
                // background="#C50114 0% 0% no-repeat padding-box"
                borderRadius={24}
                border="#C50114"
                opacity={1}
                backgroundColor="#C50114"
              />
              <img
                className="ms-5"
                src="https://thumbs.dreamstime.com/b/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg"
                alt=""
                style={{ height: 35, width: 35 }}
              />
              <p
                style={{
                  width: 105,
                  height: 16,
                  fontSize: 14,
                  color: "#1C1C1C",
                }}
                className="ms-1"
              >
                Employee Name <br />
                <p
                  style={{
                    width: 70,
                    height: 13,
                    fontSize: 12,
                    color: "#B0B0B0",
                  }}
                >
                  Employee ID
                </p>
              </p>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
