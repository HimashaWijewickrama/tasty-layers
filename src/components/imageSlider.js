import React from "react";

function ImageSlider() {
  return (
    <div className="home-image">
      <div className="cover-image-inner">
        <img
          src="https://images.unsplash.com/photo-1628586334354-f13b1e82adb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="d-block w-100"
          alt="welcome-image"
          style={{ height: "650px", objectFit: "cover", display: "block" }}
        />
      </div>
    </div>
  );
}

export default ImageSlider;
