import React from "react";
import { Box, Toolbar, Divider } from "@mui/material";
import { Stack } from "@mui/system";

import { styled } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledToolbar = styled(Toolbar)(() => ({
  borderBottom: "1px solid #ededed",
  "@media all": {
    minHeight: 39,
  },
  justifyContent: "space-between",
}));

const TopNavBarMain = () => {
  const Icons = [
    <TwitterIcon className="changecolor" />,
    <GoogleIcon className="changecolor" />,
    <YouTubeIcon className="changecolor" />,
    <FacebookIcon className="changecolor" />,
    <InstagramIcon className="changecolor" />,
  ];

  return (
    <Box sx={{ flexGrow: 3 }}>
      <StyledToolbar>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="changecolor"
          >
            Language <ExpandMoreIcon sx={{ float: "right" }} />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="changecolor"
          >
            {" "}
            Currency <ExpandMoreIcon sx={{ float: "right" }} />{" "}
          </div>
        </Stack>
        <Stack direction="row" spacing={2}>
          {Icons.map((icon) => icon)}
        </Stack>
      </StyledToolbar>
    </Box>
  );
};

export default TopNavBarMain;
