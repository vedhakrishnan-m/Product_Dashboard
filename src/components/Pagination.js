import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/productsSlice";

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state) => state.products);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <Pagination>
      {[...Array(pagination.totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === pagination.currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
