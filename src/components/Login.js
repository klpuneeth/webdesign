import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ImageComponent from "./atoms/image-component/ImageComponent";
import TitleComponent from "./atoms/title-component/TitleComponent";
import "./Login.css";
import InputComponent from "./atoms/input-componet/InputComponent";
import ButtonComponent from "./atoms/button-component/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../redux/actions/actions";

function Login() {
  const loginData = useSelector((state) => state.loginData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToEmployeeComponent = (e) => {
    e.preventDefault();
    localStorage.setItem("LoginToken", true);
    navigate("/employee");
    dispatch(updateAuth("true"));
  };
  return (
    <div>
      <div className="login-form">
        {" "}
        <Row>
          <Col xs={12} md={8}>
            <ImageComponent />
          </Col>
          <Col xs={6} md={4}>
            <form className="login">
              <div className="login-header">
                <TitleComponent
                  label={"Welcome"}
                  marginTop={25}
                  fontSize={35}
                  paragraph={"Sign in to your account"}
                />
                <br />
                <br />
                <br />
                <InputComponent
                  label={"Email-ID *"}
                  icon={faEnvelope}
                  paddingLeft={18}
                  value={loginData.emailId}
                  name={"emailId"}
                />
                <div style={{ display: "inline-flex" }}>
                  <InputComponent
                    label={"Password *"}
                    icon={faLock}
                    paddingLeft={18}
                    value={loginData.password}
                    name={"password"}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{
                      paddingTop: 32,
                      position: "absolute",
                      paddingLeft: 236,
                      width: 12,
                      height: 12,
                    }}
                  />
                </div>
                <p style={{ marginLeft: 152 }}>Forgot Passward?</p>
              </div>
              <br />
              <div>
                <ButtonComponent
                  button={"Login"}
                  onBtnClick={navigateToEmployeeComponent}
                  marginLeft={130}
                  backgroundColor="#fa607e"
                  opacity={1}
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
                  Don't have an account?
                  <Link
                    className="link-rl"
                    as={Link}
                    to={"/"}
                    style={{
                      fontWeight: "bolder",
                      color: "white",
                      textDecoration: "none",
                      marginLeft: 4,
                    }}
                  >
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
