import React from "react";
import "./Register.css";
import { Col, Row } from "react-bootstrap";
import {
  faAddressCard,
  faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "./atoms/input-componet/InputComponent";
import ImageComponent from "./atoms/image-component/ImageComponent";
import TitleComponent from "./atoms/title-component/TitleComponent";
import ButtonComponent from "./atoms/button-component/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../redux/actions/actions";

function Register() {
  const loginData = useSelector((state) => state.loginData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateToLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("LoginToken", false);
    navigate("/signin");
    dispatch(updateAuth("false"));
  };
  return (
    <div className="registration-form">
      {" "}
      <Row>
        <Col xs={12} md={8}>
          <div>
            <ImageComponent />
          </div>
        </Col>
        <Col xs={6} md={4}>
          <form className="registration">
            <div className="header">
              <TitleComponent
                label={"Register"}
                marginTop={25}
                fontSize={35}
                paragraph={"Lorem ipsum dolor sit amet"}
              />
              <label
                style={{ fontSize: 14, fontWeight: 400, textAlign: "left" }}
              >
                Register as
              </label>
              <div className="ms-3 d-flex justify-content-start mt-3">
                <div className="d-flex justify-content-start align-items-center">
                  <input type="radio" className="radio-button" />
                  <label className="ms-1">Admin</label>
                </div>
                <div className="ms-5 d-flex justify-content-start align-items-center ">
                  <input type="radio" className="radio-button" checked={true} />
                  <label className="ms-1">Employee</label>
                </div>
              </div>
              <br />
              <br />
              <InputComponent
                label={"Employee Name *"}
                icon={faUser}
                paddingLeft={18}
                value={loginData.employeeName}
                name={"employeeName"}
              />
              <br />
              <InputComponent
                label={"Employee ID *"}
                icon={faAddressCard}
                paddingLeft={18}
                value={loginData.employeeId}
                name={"employeeId"}
              />
              <br />
              <InputComponent
                label={"Email-ID *"}
                icon={faEnvelope}
                paddingLeft={18}
                value={loginData.emailId}
                name={"emailId"}
              />
              <br />
              <InputComponent
                label={"Password *"}
                icon={faLock}
                paddingLeft={18}
                value={loginData.password}
                name={"password"}
              />
            </div>
            <br />
            <ButtonComponent
              button={"Register"}
              onBtnClick={navigateToLogin}
              marginLeft={130}
              opacity={1}
              backgroundColor="#fa607e"
              border="#fa607e"
            />
            <p
              style={{
                fontSize: 14,
                width: 210,
                marginLeft: 130,
                height: 18,
                marginTop: 7,
                color: "white",
              }}
            >
              Already have an account?
              <Link
                className="link-rl"
                as={Link}
                to={"/signin"}
                style={{
                  fontWeight: "bolder",
                  color: "white",
                  textDecoration: "none",
                  marginLeft: 4,
                }}
              >
                SignIn
              </Link>
            </p>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
