"use client";
import { Box, styled } from "@mui/material";

const PostGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: " 40px 10px",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
  padding: 0,
}));

export default PostGrid;
