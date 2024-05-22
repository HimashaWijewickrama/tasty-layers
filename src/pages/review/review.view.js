//import dependencies
import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
//import pre-created components
import TitleText from "../../components/titleText";

const ReviewView = (props) => {
  const { customers } = props; //props getting from container

  const firstCustomers = customers.slice(0, 3); //get only first 3 customers reviews from all customers'reviews

  return (
    <Container id="review" style={{ marginBottom: "100px" }}>
      <TitleText title={"customer reviews"} />
      <br />
      <Row xs={1} md={3} className="g-2">
        {/* set the data for the review cards */}
        {firstCustomers.map((customer) => (
          <Col key={customer.id}>
            <Card className="card text-dark bg-light mb-3 shadow p-2 mb-3 bg-body rounded text-center border-0">
              <Row>
                <Col md={4}>
                  <Card.Img variant="top" src={customer.avatar} rounded />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>
                      <p className="text-capitalize fs-6 fw-bold">
                        {customer.message}
                      </p>
                    </Card.Title>
                    <Card.Text>
                      <p className="text-center card-text small text-muted">
                        {customer.firstName} {customer.lastName}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ReviewView;
