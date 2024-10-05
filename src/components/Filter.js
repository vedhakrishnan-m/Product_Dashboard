import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../store/slices/productsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  const onCategoryChange = (value) => {
    dispatch(setCategory(value));
  };
  const onSortChange = (value) => {
    dispatch(setSortBy(value));
  };

  return (
    <div>
      {/* Category Filter */}
      <Form.Group className="mb-3">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Select onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="All">All Categories</option>
          {[...new Set(items.map((a) => a.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Sort Options */}
      <Form.Group>
        <Form.Label>Sort by</Form.Label>
        <Form.Select onChange={(e) => onSortChange(e.target.value)}>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default Filter;
