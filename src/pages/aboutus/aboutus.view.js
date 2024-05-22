import React from "react";
import TitleText from "../../components/titleText";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const AboutusView = () => {
  return (
    <Container id="aboutus" style={{ marginBottom: "100px" }}>
      <TitleText title={"about us"} />
      <br />
      <Row>
        <Col>
          <Card mb={12}>
            <Row>
              <Col md={6}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1504128668912-f893e6606db6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Text>
                    <div className="card-body text-dark">
                      <p className="text-capitalize fs-6 fw-bold">
                        Company Overview
                      </p>
                      <p
                        className="text-start card-text small text-muted"
                      >
                        Tasty Layers is your go to cake shop for delightful and
                        exquisitely crafted cakes. Founded with a love for
                        baking and a commitment to quality, we specialize in
                        creating beautiful and delicious cakes for all
                        occasions.
                      </p>
                      <p className="text-capitalize fs-6 fw-bold">
                        Our Mission
                      </p>
                      <p
                        className="card-text small text-muted"
                        style={{ textAlign: "justify" }}
                      >
                        We are committed to using high-quality ingredients,
                        innovative designs, and exceptional customer service to
                        ensure that every cake we make adds a layer of joy and
                        sweetness to our customers' special moments.
                      </p>
                      <p className="text-capitalize fs-6 fw-bold">Our Vision</p>
                      <p
                        className="card-text small text-muted"
                        style={{ textAlign: "justify" }}
                      >
                        Our vision is to be the leading cake shop known for our
                        artistry, creativity, and dedication to excellence. We
                        aim to inspire and bring smiles to our customers by
                        continually pushing the boundaries of cake design and
                        flavor, making a cherished part of every celebration.
                      </p>
                    </div>
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

export default AboutusView;
