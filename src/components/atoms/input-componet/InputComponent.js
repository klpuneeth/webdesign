import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginData } from "../../../redux/actions/actions";

function InputComponent({
  width = 250,
  icon = "icon",
  type = "text",
  fontWeight = 400,
  fontSize = 14,
  textAlign = "left",
  label = "label",
  marginTop = 0,
  paddingLeft = 0,
  value = {},
  name = "name",
}) {
  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.loginData);

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);

    dispatch(
      updateLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      })
    );
  };
  return (
    <div>
      <label
        style={{
          fontWeight: fontWeight,
          fontSize: fontSize,
          textAlign: textAlign,
          marginTop: marginTop,
        }}
      >
        {label}
      </label>
      <div className="position-relative">
        <input
          className="inputs"
          type={type}
          style={{
            width: width,
            color: "white",
            paddingLeft: paddingLeft,
          }}
          onChange={handleChange}
          value={value}
          name={name}
        />
        <FontAwesomeIcon
          icon={icon}
          className="position-absolute start-0"
          style={{ paddingTop: 9 }}
        />
      </div>
    </div>
  );
}

export default InputComponent;
