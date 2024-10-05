import React, { useState } from "react";
import {
  Toolbar,
  AppBar,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/slices/productsSlice";

const NavigatorMenu = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  const elements = ["Home", "Shop", "Blogs", "Pages"];
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const navigate = useNavigate();

  const changeLocation = (path) => {
    navigate(`/${path.toLowerCase()}`); // Assuming paths are in lowercase
  };

  // State for modal visibility and selected category
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleLabelClick = () => {
    setOpen(true); // Open modal when label is clicked
  };

  const handleClose = () => {
    setOpen(false); // Close modal
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    dispatch(setCategory(category));
    handleClose(); // Close modal after selecting category
  };

  // Get unique categories
  const uniqueCategories = [
    "All Categories",
    ...new Set(items.map((item) => item.category)),
  ];

  return (
    <div>
      <AppBar
        elevation={1}
        sx={{ bgcolor: "white", borderRadius: "30%", margin: "2% 0" }}
        position="static"
      >
        <Toolbar variant="dense" sx={styles}>
          <FormControl
            variant="outlined"
            sx={{
              bgcolor: "#40a944",
              borderRadius: "20px",
              width: "20%",
            }}
          >
            <div
              style={{
                color: "white",
                padding: "10px 14px", // Padding to match label height
                display: "flex",
                alignItems: "center",
                cursor: "pointer", // Change cursor to pointer
              }}
              onClick={handleLabelClick} // Handle label click
            >
              <MenuIcon />{" "}
              <span style={{ marginLeft: "5px" }}>
                {selectedCategory || "All Categories"}{" "}
                {/* Change label based on selected category */}
              </span>
            </div>
          </FormControl>

          <div style={{ display: "flex", width: "40%", color: "black" }}>
            {elements.map((element) => (
              <p
                key={element} // Added key for list items
                onClick={() => changeLocation(element)}
                className="changecolor"
                style={{ cursor: "pointer", margin: "0 10px" }} // Improved styles for better UX
              >
                {element}
              </p>
            ))}
            <div style={{ cursor: "pointer" }}>Contact Us</div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Modal for category selection */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select a Category</DialogTitle>
        <DialogContent>
          {uniqueCategories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategorySelect(category)} // Handle category selection
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 1 }} // Style for button
            >
              {category}
            </Button>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NavigatorMenu;
