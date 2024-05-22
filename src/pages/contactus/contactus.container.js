import React, { memo, useState } from "react";
import ContactusView from "./contactus.view";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ContactusContainer = () => {
  const [feedbackData, setFeedbackData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSend = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't change this again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sent!",
          text: "Your message has been sent.",
          icon: "success",
        });
      }
    });
  };

  const addFeedback = async (feedback) => {
    try {
      let response = await fetch(
        "https://664d03f7ede9a2b5565268e0.mockapi.io/users",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedback),
        }
      );
      if (response.ok) {
        let newMessage = await response.json();
        setFeedbackData(newMessage);
        setShow(true);
      } else {
        console.log("Error", response.statusText);
        setShow(false);
        alert("Something went wrong! Please try again");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <ContactusView addFeedback={addFeedback} />
      {feedbackData && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              <p className="text-center text-capitalize fs-4 fw-bolder">
                Are you sure ?
              </p>
              <p className="text-center fs-6 small text-muted">
                After you submit your details, you can't change them! Please
                check again and then submit!
              </p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="col-md-12" style={{ marginTop: "10px" }}>
                <label className="form-label">Your First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  name="firstName"
                  value={feedbackData.firstName}
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
                  value={feedbackData.lastName}
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
                  value={feedbackData.emailAddress}
                  required
                />
              </div>
              <div className="col-md-12" style={{ marginTop: "10px" }}>
                <label className="form-label">Mobile Phone Number *</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom04"
                  name="phoneNumber"
                  value={feedbackData.phoneNumber}
                  required
                />
              </div>
              <div className="col-md-12" style={{ marginTop: "10px" }}>
                <label className="form-label">Your Message *</label>
                <textarea
                  className="form-control"
                  id="validationTextarea"
                  name="message"
                  value={feedbackData.message}
                  required
                ></textarea>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSend}>
              Yes,Send
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default memo(ContactusContainer);
