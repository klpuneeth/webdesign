import React, { useState } from "react";
import LeaveModel from "./LeaveModel";
import { Container, Navbar } from "react-bootstrap";
import ButtonComponent from "./atoms/button-component/ButtonComponent";

function LeaveComponent() {
  const [showModal, setShowModal] = useState(false);

  const showHideLeaveModal = (show) => {
    setShowModal(show);
  };

  const navigateToModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      {" "}
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
              Leave
            </Navbar.Brand>
            {/* <Button
              onClick={() => {
                setShowModal(true);
              }}
              style={{ width: 145, height: 40, backgroundColor: "#4C56C0" }}
            >
              Apply Leave
            </Button> */}
            <ButtonComponent
              width={145}
              height={40}
              onBtnClick={navigateToModal}
              button={"Apply Leave"}
              background="#4C56C0"
              opacity={1}
              borderRadius={10}
            />
          </Container>
        </Navbar>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-pencil"
                    viewBox="0 0 16 16"
                    id="edit"
                    onClick={() => {}}
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                    id="delete"
                    onClick={() => {}}
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
      {showModal && (
        <LeaveModel
          showModal={showModal}
          showHideLeaveModal={showHideLeaveModal}
        />
      )}
    </div>
  );
}

export default LeaveComponent;
