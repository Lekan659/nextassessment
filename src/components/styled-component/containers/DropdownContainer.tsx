import { Box, styled } from "@mui/material";

const DropdownContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  top: 0,
  left: 0,
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export default DropdownContainer;
