import { Badge, IconButton, Box, Stack, Toolbar } from "@mui/material";

import { styled } from "@mui/material/styles";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CustomizedSearcbar from "../components/SearchBar";

const SearchBarLogo = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const elements = [
    <p className="changecolor">REGISTRATION</p>,
    <p>/</p>,
    <p className="changecolor">LOGIN</p>,
    <FavoriteBorderIcon className="changecolor" />,

    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <AddShoppingCartIcon className="changecolor" />
      </StyledBadge>
    </IconButton>,
  ];

  return (
    <Box>
      <Toolbar sx={{ mt: "2%", flexGrow: 3, justifyContent: "space-between" }}>
        <img src={"./asset/logo.png"} alt="logo" />
        <CustomizedSearcbar defaultBar={"yes"} />
        <Stack sx={{ alignItems: "center" }} direction="row" spacing={3}>
          {elements.map((icon) => icon)}
        </Stack>
      </Toolbar>
    </Box>
  );
};
export default SearchBarLogo;
