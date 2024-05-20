import React from "react";
import TitleText from "../components/titleText";
import { Row, Col, Card } from "react-bootstrap";

function Review() {
  return (
    <div className="container" id="review" style={{ marginBottom: "100px" }}>
      <TitleText title={"customer review"} />
      <br />
      <Row xs={1} md={3} className="g-2">
        <Col>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Review;
