import React from "react";
import { Col, Container, Navbar } from "react-bootstrap";

function AttendanceList() {
  return (
    <div>
      <form
        className="ms-3 mt-3"
        style={{
          width: 1408,
          height: 640,
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 0px 2px #00000029",
          border: "1px solid #F5F5F5",
          borderRadius: 10,
          opacity: 1,
        }}
      >
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home" style={{ fontWeight: "bolder" }}>
              Attendance List
            </Navbar.Brand>
            <Col className="text-end">
              <label>From:</label>{" "}
              <input
                className="frm-date"
                type="date"
                placeholder="From"
                style={{ borderRadius: 5 }}
              />{" "}
              &nbsp;&nbsp;&nbsp;
              <label>To:</label>&nbsp;
              <input
                type="date"
                className="to-date"
                style={{ borderRadius: 5 }}
              />
            </Col>
          </Container>
        </Navbar>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Login Time</th>
                <th scope="col">Logout Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default AttendanceList;
