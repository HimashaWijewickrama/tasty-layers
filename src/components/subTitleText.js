import React from "react";

function SubTitleText({subtitle}) {
  return (
    <div
      className="d-flex p-2 bd-highlight"
      style={{ marginTop: "20px", marginBottom: "0px" }}
    >
      <div className="card-body">
        <p
          className="text-center text-muted text-uppercase fs-3 fw-light"
          style={{ textShadow: "0.8px 1px #575A5E", letterSpacing: "0.5rem" }}
        >
          {subtitle}
        </p>
        {/* <hr style={{ width: '50%', margin: '0 auto' }} /> */}
      </div>
    </div>
  );
}
export default SubTitleText;
