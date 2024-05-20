import React from "react";

function TitleText({ title }) {
  return (
    <div
      className="d-flex p-2 bd-highlight"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <div className="card-body">
        <p
          className="text-center text-uppercase fs-3 fw-light"
          style={{ textShadow: "0px 0px #575A5E", letterSpacing: "0.5rem" }}
        >
          {title}
        </p>
        <hr style={{ width: "50%", margin: "0 auto" }} />
      </div>
    </div>
  );
}
export default TitleText;
