import React from "react";

function TitleComponent({
  fontWeight = 400,
  fontSize = 16,
  textAlign = "left",
  label = "label",
  paragraph = "paragraph",
  marginBottom = 50,
  marginTop = 25,
  width = 234,
  height = 18,
}) {
  return (
    <div>
      {" "}
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
      <p
        style={{
          marginBottom: marginBottom,
          fontWeight: fontWeight,
          width: width,
          height: height,
        }}
      >
        {paragraph}
      </p>
    </div>
  );
}

export default TitleComponent;
