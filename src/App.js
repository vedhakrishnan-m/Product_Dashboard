import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <div>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
