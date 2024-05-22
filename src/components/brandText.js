//import dependencies
import React from "react";
import { Container } from "react-bootstrap";

//create a common component to add "brand name (Tasty layers)"
function BrandText() {
  return (
    <Container>
      <p
        className="text-center text-capitalize fs-4 fw-bolder"
        style={{ textShadow: "0px 0px #575A5E", letterSpacing: "0.3rem" }}
      >
        Tasty
      </p>{" "}
      <p
        className="text-center text-capitalize fs-4 fw-bold"
        style={{ color: "#B49A2C", letterSpacing: "0.3rem" }}
      >
        Layers
      </p>
    </Container>
  );
}
export default BrandText;
