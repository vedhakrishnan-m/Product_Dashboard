import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../store/slices/productsSlice";
import ProductList from "../components/ProductList";

import Pagination from "../components/Pagination";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../header";

const HomePage = () => {
  const dispatch = useDispatch();
  const { filteredItems, status } = useSelector((state) => state.products);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Header />
        </Col>
        <Col md={12}>
          {status === "loading" && (
            <img src="./asset/Hourglass.gif" alt="loader" />
          )}

          {status === "succeeded" && (
            <>
              <ProductList products={filteredItems} />
              <Pagination />
            </>
          )}
        </Col>{" "}
      </Row>
    </Container>
  );
};

export default HomePage;
