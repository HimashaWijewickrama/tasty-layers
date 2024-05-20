import React from "react";
import TitleText from "../components/titleText";
import { Card, Row, Col } from "react-bootstrap";
import feature1 from "../assets/feat-5.jpg";
function Products() {
  return (
    <div className="container" id="products" style={{ marginBottom: "100px" }}>
      <TitleText title={"products"} />
      <br />
      <Row xs={1} md={4} className="g-2">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={feature1} />
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Products;
