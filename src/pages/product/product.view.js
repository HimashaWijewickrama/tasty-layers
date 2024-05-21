import React from "react";
import TitleText from "../../components/titleText";
import { Card, Row, Col, Button, Stack } from "react-bootstrap";

const ProductView = (props) => {
  const { products } = props;

  return (
    <div className="container" id="product" style={{ marginBottom: "100px" }}>
      <TitleText title={"products"} />
      <br />
      <Row xs={1} md={4} className="g-2">
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.product_img} />
              {/* <Card.Header>{product.product_name}</Card.Header> */}
              <Card.Body>
                <Card.Title className="text-capitalize fs-6 fw-bold">
                  {product.product_name}
                </Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <p className="text-start fs-6 fw-normal lh-base">
                        Price : LKR {product.product_price}
                      </p>
                    </Col>
                    <Col>
                      <p className="text-end fs-6 fw-normal lh-base">
                        Weight: {product.product_weight} Kg
                      </p>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Stack className="d-grid gap-2" >
                  <Button variant="success">Buy Now</Button>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ProductView;
