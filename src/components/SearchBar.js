import React from "react";

import { useDispatch } from "react-redux";
import { setSearchTerm } from "../store/slices/productsSlice";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import { Box } from "@mui/material";
const CustomizedSearcbar = (props) => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        borderRadius: "50px",

        overflow: "hidden",

        display: "flex",
        alignItems: "center",
        minWidth: 400,
        width: props.width,
      }}
    >
      {/* props default */}
      {props.defaultBar === "yes" && (
        <Box
          sx={{
            padding: "4% 5%",
            backgroundColor: "#f5f5f5",
          }}
        >
          Select a Category
        </Box>
      )}

      <InputBase
        onChange={handleSearchChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Select Product..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Box
        sx={{
          padding: "3% 5%",
          backgroundColor: "#40a944",
        }}
      >
        <SearchIcon />
      </Box>
    </Paper>
  );
};
export default CustomizedSearcbar;
