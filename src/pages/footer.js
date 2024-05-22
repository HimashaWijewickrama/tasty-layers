import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Button from "react-bootstrap/Button";
import BrandText from "../components/brandText";

function Footer() {
  return (
    <div className="d-flex flex-column h-100">
      <hr style={{ width: "100%",margin: "0 auto", color: '#000000' }} />
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">

              <h5 className="h1 text-dark"><BrandText/></h5>
              <p className="small text-muted" style={{ textAlign: "justify" }}>
                We believe that every celebration is unique and deserves a
                special touch. Our goal is to make delightful and beautifully
                crafted cakes accessible to everyone, adding a layer of joy to
                life's memorable moments
              </p>
              <h5 className="mb-3 fw-bold">Follow Us |</h5>

              <span style={{ marginRight: "20px", color: "muted" }}>
                <FaWhatsapp
                  size={25}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Whatsapp"
                />
              </span>
              <span style={{ marginRight: "20px", color: "muted" }}>
                <FaFacebook
                  size={25}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Facebook"
                />
              </span>
              <span style={{ marginRight: "20px", color: "muted" }}>
                <FaInstagram
                  size={25}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Instagram"
                />
              </span>
              <span style={{ marginRight: "20px", color: "muted" }}>
                <FaTwitter
                  size={25}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Twitter"
                />
              </span>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-muted mb-3 fw-bold">Quick Links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Customer Reviews
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                   Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-muted mb-3 fw-bold">Customer Service</h5>
              <ul className="list-unstyled text-muted">
                <li style={{ paddingBottom: "10px" }}>
                  <span style={{ marginRight: "5px", color: "muted" }}>
                    <FaPhoneAlt
                      size={15}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Hot-line"
                    />
                  </span>
                  +94 769 603 388
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <span style={{ marginRight: "5px", color: "muted" }}>
                    <FaEnvelope
                      size={15}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="E mail"
                    />
                  </span>
                  online@tastylayers.lk
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <span style={{ marginRight: "5px", color: "muted" }}>
                    <FaLocationArrow
                      size={15}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Location"
                    />
                  </span>
                  No:215, Colombo 10
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-muted mb-3 fw-bold">Newsletter</h5>
              <p className="small text-muted">
                Want to know what we're up to? Sign up for the newsletter and
                join our tribe.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <Button variant="outline-success" id="button-addon2">
                    <IoIosSend
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Send"
                    />
                  </Button>
                </div>
              </form>
            </div>
            <hr style={{ color: "muted" }} />
            <div style={{ alignContent: "center", textAlign: "center" }}>
              <p className="small text-muted mb-0">
                &copy; 2023 Tasty Layers | All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
