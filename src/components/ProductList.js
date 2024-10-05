import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const { filteredItems } = useSelector((state) => state.products);

  return (
    <MDBContainer fluid className="h-10 text-center">
      <MDBRow>
        {filteredItems.map((product) => (
          <MDBCol md="12" lg="4" className="mb-5" key={product.id}>
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MDBCard className="h-70">
                <MDBCardImage
                  src={product.image}
                  alt={product.title || "Product Image"}
                  className="w-70"
                  style={{
                    height: "150px",
                    objectFit: "contain",
                    padding: "4%",
                  }}
                />

                <MDBCardBody>
                  <h5 className="card-title">
                    {product.title || "No Title Available"}
                  </h5>

                  <p className="text-muted">{product.category}</p>
                  <h6 className="mb-3">${product.price}</h6>
                </MDBCardBody>
              </MDBCard>
            </Link>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
