import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BrandText from "./brandText";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><BrandText/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="my-2 my-lg-0 mx-auto"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <Nav.Link href="#home" className="fw-normal text-capitalize fs-5">Home</Nav.Link>
            <Nav.Link href="#aboutus" className="fw-normal text-capitalize fs-5">About Us</Nav.Link>
            <Nav.Link href="#product"className="fw-normal text-capitalize fs-5">Products</Nav.Link>
            <Nav.Link href="#review"className="fw-normal text-capitalize fs-5">Customer Reviews</Nav.Link>
            <Nav.Link href="#contactus"className="fw-normal text-capitalize fs-5">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
