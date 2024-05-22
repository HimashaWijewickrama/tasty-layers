//import dependencies
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import pre-created brandtext component
import BrandText from "./brandText";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/tasty-layers">
          <BrandText />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="my-2 my-lg-0 mx-auto"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            {/* navbar links */}
            <Nav.Link>
              <Link
                to="home"
                className="fw-bold text-capitalize fs-6 text-decoration-none"
              >
                {" "}
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="aboutus"
                className="fw-bold text-capitalize fs-6 text-decoration-none"
              >
                {" "}
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="product"
                className="fw-bold text-capitalize fs-6 text-decoration-none"
              >
                {" "}
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="review"
                className="fw-bold text-capitalize fs-6 text-decoration-none"
              >
                Customer Reviews
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="contactus"
                className="fw-bold text-capitalize fs-6 text-decoration-none"
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
