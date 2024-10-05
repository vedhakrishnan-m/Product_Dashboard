import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./ProductDetailsPage.css"; // Import custom CSS for styling

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <p className="text-center">Loading product details...</p>;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg rounded">
            <Card.Img
              variant="top"
              src={product.image}
              className="p-3 product-img"
              alt={product.title}
            />
            <Card.Body className="text-center">
              <Card.Title className="product-title mb-3">
                {product.title}
              </Card.Title>
              <Card.Text className="product-description">
                {product.description}
              </Card.Text>
              <Card.Text className="product-price display-6">
                ${product.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
