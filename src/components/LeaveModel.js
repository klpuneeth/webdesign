import React from "react";
import { Modal } from "react-bootstrap";
import ButtonComponent from "./atoms/button-component/ButtonComponent";

function LeaveModel({ showModal, showHideLeaveModal }) {

  const navigatetoEmployeeModule = () => {
    showHideLeaveModal(false)}
  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => {
          showHideLeaveModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Apply Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <label style={{ marginLeft: 45, marginTop: 40, color: "#707070" }}>
            From:
          </label>{" "}
          <input
            type="date"
            placeholder="From"
            style={{ borderRadius: 5, height: 40, border: "1px solid #E9E9F0" }}
          />{" "}
          &nbsp;&nbsp;{" "}
          <span>
            <label style={{ color: "#707070" }}>To:</label>&nbsp;
            <input
              type="date"
              style={{
                borderRadius: 5,
                height: 40,
                border: "1px solid #E9E9F0",
              }}
            />
          </span>
          <select
            style={{
              marginLeft: 45,
              marginTop: 15,
              width: 370,
              height: 40,
              borderRadius: 5,
              border: "1px solid #E9E9F0",
              color: "#707070",
            }}
          >
            <option>Leave Type</option>
            <option>Sick Leave</option>
            <option>Compensatory Leave</option>
            <option>Casual Leave</option>
            <option>Gardening Leave</option>
          </select>
          <textarea
            type="text"
            style={{
              marginTop: 15,
              width: 370,
              height: 100,
              borderRadius: 5,
              marginLeft: 45,
              color: "#707070",
              border: "1px solid #E9E9F0",
            }}
            placeholder="Description"
          />
          
        </Modal.Body>
        {/* <Modal.Footer> */}
        {/* <Button
          onClick={() => showHideLeaveModal(false)}
          style={{
            width: 300,
            height: 48,
            marginLeft: 95,
            marginBottom: 50,
            backgroundColor: "black",
          }}
        >
          Apply Leave
        </Button> */}
        <ButtonComponent
          button={"Apply Leave"}
          width={300}
          height={48}
          marginLeft={95}
          backgroundColor="#121212"
          marginBottom={50}
          opacity={1}
          borderRadius={10}
          onBtnClick={navigatetoEmployeeModule}
        />

        {/* </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default LeaveModel;
