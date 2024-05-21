import React from "react";
import TitleText from "../../components/titleText";
import { Row, Col, Card } from "react-bootstrap";

const ReviewView = (props) => {
  const { customers } = props;

  return (
    <div className="container" id="review" style={{ marginBottom: "100px" }}>
      <TitleText title={"customer reviews"} />
      <br />
      <Row xs={1} md={3} className="g-2">
        {customers.map((customer) => (
          <Col key={customer.id}>
            <Card className="text-center">
              <Row>
                <Col xs={2} md={4}>
                  <Card.Img variant="top" src={customer.avatar} rounded />
                </Col>
                <Col xs={2} md={8}>
                  <Card.Body>
                    <Card.Title className="text-capitalize fs-6 fw-bold">
                      {customer.message}
                    </Card.Title>
                    <Card.Text className="text-center card-text small text-muted">
                      {customer.firstName} {customer.lastName}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ReviewView;
