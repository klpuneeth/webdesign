import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../Images/user.svg";
import calender from "../Images/calender.svg";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../../../redux/actions/actions";

function SideNavbar() {
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.setItem("LoginToken", "false");
    dispatch(updateAuth("false"));
  };

  return (
    <div>
      {" "}
      <form
        className="ms-4 mt-3"
        style={{
          width: 64,
          height: 640,
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 0px 2px #00000029",
          borderRadius: 10,
          opacity: 1,
          border: "#00000029",
        }}
      >
        {isAuth === "true" && (
          <div>
            <Link as={Link} to="/employee">
              <img
                src={user}
                alt=""
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 15,
                  marginLeft: 20,
                  background:
                    "transparent url('img/Mask Group 10.png') 0% 0% no-repeat padding-box",
                }}
              />
            </Link>
            <br />
            <br />
            <Link as={Link} to="/leave">
              <img
                src={calender}
                alt=""
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 15,
                  marginLeft: 20,
                  background:
                    "transparent url('img/Mask Group 11.png') 0% 0% no-repeat padding-box",
                }}
              />
            </Link>
            <Link as={Link} to="/signin" onClick={logout}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 500,
                  marginLeft: 20,
                }}
              />
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default SideNavbar;
