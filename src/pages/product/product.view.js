import React from "react";
import TitleText from "../../components/titleText";
import { Card, Row, Col, Button, Stack, Container } from "react-bootstrap";
import Swal from "sweetalert2";

const ProductView = (props) => {
  const { products } = props;

  const handleBuy = () => {
    Swal.fire({
      title: "Do you want to place an order now?",
      html: `<p className="text-start small text-muted">Call our hotline +94 769 603 388 or visit our outlet in Homagama to confirm your order. Please, place your all orders between 8.00 am and 5.00 pm on weekdays. Orders are not accepted on weekends</p>`,
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
    })
  };

  return (
    <Container id="product" style={{ marginBottom: "100px" }}>
      <TitleText title={"products"} />
      <br />
      <Row xs={1} md={4} className="g-2">
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.product_img} />
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
                        Weight : {product.product_weight} Kg
                      </p>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Stack className="d-grid gap-2">
                  <Button variant="success" onClick={handleBuy}>
                    Buy Now
                  </Button>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ProductView;
