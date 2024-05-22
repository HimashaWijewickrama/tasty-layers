import React from "react";
import TitleText from "../../components/titleText";
import { Row, Col, Card, Container } from "react-bootstrap";
import Contact from "../../assets/contact.png";
import { IoIosSend } from "react-icons/io";

const ContactusView = (props) => {
  return (
    <Container id="contact" style={{ marginBottom: "100px" }}>
      <TitleText title={"contact us"} />
      <br />
      <Row>
        <Col>
          <Card mb={12} className="border-0">
            <Row>
              <Col md={6}>
                <Card.Img variant="top" src={Contact} />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>
                    <p className="text-capitalize fs-6 fw-bold lh-lg">
                      Please use this form both for suggesting improvements to
                      processes and for leave your feedbacks
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <form className="was-validated">
                      <div className="col-md-12" style={{ marginTop: "10px" }}>
                        <label className="form-label">Your First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          placeholder="Your first name is required"
                          required
                        />
                      </div>
                      <div className="col-md-12" style={{ marginTop: "10px" }}>
                        <label className="form-label">Your Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          placeholder="Your last name is required"
                          required
                        />
                      </div>
                      <div className="col-md-12" style={{ marginTop: "10px" }}>
                        <label className="form-label">E-mail Address *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom03"
                          placeholder="E-mail address is required"
                          required
                        />
                      </div>
                      <div className="col-md-12" style={{ marginTop: "10px" }}>
                        <label className="form-label">Your Message *</label>
                        <textarea
                          className="form-control is-invalid"
                          id="validationTextarea"
                          placeholder="Your message is required"
                          required
                        ></textarea>
                      </div>

                      <div
                        className="d-grid col-md-12"
                        style={{ marginTop: "20px" }}
                      >
                        <button
                          type="button"
                          className="btn btn-light btn-outline-success"
                        >
                          <IoIosSend /> Send
                        </button>
                      </div>
                    </form>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactusView;
