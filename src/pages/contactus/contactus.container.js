import React, { memo, useState } from "react";
import ContactusView from "./contactus.view";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ContactusContainer = () => {
  const [feedbackData, setFeedbackData] = useState(null);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleShow = () => setShow(true);

  const handleSend = () => {
    Swal.fire({
      title: "Your message has been sent !",
      text: "Thank you so much for your feedback !",
      icon: "success",
      showCancelButton: true,
      cancelButtonColor: "#d33",
    });
    setShow(false);
  };

  const addFeedback = async (feedback) => {
    try {
      setLoader(true);
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
        setLoader(false);
      } else {
        console.log("Error", response.statusText);
        setShow(false);
        alert("Something went wrong! Please try again");
        setLoader(false);
      }
    } catch (e) {
      console.log(e);
      setLoader(false);
    }
  };

  const deleteFeedback = async () => {
    try {
      setLoader(true);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let response = await fetch(
            `https://664d03f7ede9a2b5565268e0.mockapi.io/users/${feedbackData.id}`,
            {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            setShow(false);
            setFeedbackData(null);
            setLoader(false);
            Swal.fire({
              title: "Deleted!",
              text: "Your message has been deleted.",
              icon: "success",
            });
          } else {
            console.log("Error", response.statusText);
            setShow(false);
            alert("Something went wrong! Please try again");
            setLoader(false);
          }
        } else {
          setLoader(false);
        }
      });
    } catch (e) {
      console.log(e);
      setLoader(false);
    }
  };

  return (
    <>
      <ContactusView addFeedback={addFeedback} loader={loader} />
      {feedbackData && (
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>
              <p className="text-center text-capitalize fs-4 fw-bolder">
                Review your message
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
            <Button variant="success" onClick={handleSend}>
              Done
            </Button>
            <Button variant="danger" onClick={deleteFeedback}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default memo(ContactusContainer);
