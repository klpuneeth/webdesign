import React from "react";
import { Button } from "react-bootstrap";

function ButtonComponent({
  onBtnClick = () => {},
  button = "button",
  borderRadius = 24,
  width = 197,
  height = 48,
  backgroundColor = "",
  marginLeft = 0,
  border = "",
  // background = "",
  opacity = 0,
  className = "",
  marginBottom = 0,
}) {
  return (
    <div>
      <Button
        className={className}
        onClick={onBtnClick}
        style={{
          borderRadius: borderRadius,
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          marginLeft: marginLeft,
          border: border,
          // background: background,
          opacity: opacity,
          marginBottom: marginBottom,
        }}
      >
        {button}
      </Button>
    </div>
  );
}

export default ButtonComponent;
