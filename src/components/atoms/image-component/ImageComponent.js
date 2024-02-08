import React from "react";

function ImageComponent({ fontWeight = 500, textAlign = "center" }) {
  return (
    <div>
      <img
        src="https://media.licdn.com/dms/image/D4D12AQEz8Sun7ZDI_Q/article-cover_image-shrink_720_1280/0/1698917644088?e=1712188800&v=beta&t=XCVJux5xOsbn34s5dpsZgToJdoEkQrOFgELGJUrwErI"
        alt="..."
        className="image"
      ></img>
      <br />
      <br />
      <h6 className="title">AMS</h6>
      <h3 style={{ fontWeight: fontWeight, textAlign: textAlign }}>
        Attendance Management System
      </h3>
      <p style={{ fontWeight: fontWeight, textAlign: textAlign }}>
        Lorem ipsum dolor sit amet, consetetur{" "}
      </p>
    </div>
  );
}

export default ImageComponent;
