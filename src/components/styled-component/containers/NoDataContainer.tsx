"use client";
import { Stack, styled } from "@mui/material";

const NoDataContainer = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("xs")]: {
    height: "120px",
  },
  [theme.breakpoints.up("md")]: {
    height: "160px",
  },
  width: "100%",
}));

export default NoDataContainer;
