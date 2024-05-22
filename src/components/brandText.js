//import dependencies
import React from "react";
import { Container } from "react-bootstrap";

//create a common component to add "brand name (Tasty layers)"
function BrandText() {
  return (
    <Container>
      <p
        className="text-center text-uppercase fs-3 fw-bolder"
        style={{ textShadow: "0px 0px #575A5E", letterSpacing: "0.3rem" }}
      >
        Tasty Layers
      </p>
    </Container>
  );
}
export default BrandText;
