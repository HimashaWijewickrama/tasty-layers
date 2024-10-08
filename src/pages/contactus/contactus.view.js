//import dependencies
import React, { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { IoIosSend } from "react-icons/io"; //icons from react-icons
import { Oval } from "react-loader-spinner"; //import loading animation(Spinner)
import Contact from "../../assets/contact.png"; //import image
import TitleText from "../../components/titleText";

const ContactusView = ({ addFeedback, loader }) => {
  //all the fields are empty at the begining
  const [newFeedback, setNewFeedback] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  //function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFeedback(newFeedback);
    setNewFeedback({
      //after submit the form, input fields will be empty
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <Container id="contactus" style={{ marginBottom: "100px" }}>
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
                    <form
                      onSubmit={handleSubmit}
                      className="was-validated"
                      method="POST"
                    >
                      <div className="col-md-12" style={{ marginTop: "10px" }}>
                        <label className="form-label">Your First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          name="firstName"
                          value={newFeedback.firstName}
                          onChange={handleChange}
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
                          name="lastName"
                          value={newFeedback.lastName}
                          onChange={handleChange}
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
                          name="emailAddress"
                          value={newFeedback.emailAddress}
                          onChange={handleChange}
                          placeholder="E-mail address is required"
                          required
                        />
                      </div>
                      <div className="col-md-12" style={{ marginTop: "10px" }}>
                        <label className="form-label">
                          Mobile Phone Number *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom04"
                          name="phoneNumber"
                          value={newFeedback.phoneNumber}
                          onChange={handleChange}
                          placeholder="Mobile phone number is required"
                          required
                        />
                      </div>
                      <div className="col-md-12" style={{ marginTop: "10px" }}>
                        <label className="form-label">Your Message *</label>
                        <textarea
                          className="form-control"
                          id="validationTextarea"
                          name="message"
                          value={newFeedback.message}
                          onChange={handleChange}
                          placeholder="Your message is required"
                          required
                        ></textarea>
                      </div>

                      <div
                        className="d-grid col-md-12"
                        style={{ marginTop: "20px" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-light btn-outline-success"
                          disabled={loader === true ? true : false}
                        >
                          {loader === true ? (
                            <Oval height="40px" width="80px" color="#198754" /> //until modal is opening(form is submitting) loader will be appeared
                          ) : (
                            <>
                              {" "}
                              <IoIosSend /> Send
                            </>
                          )}
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
