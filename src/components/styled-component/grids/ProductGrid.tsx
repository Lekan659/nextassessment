"use client";
import { Box, styled } from "@mui/material";

const ProductGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    gap: "70px",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "56px 30px",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  },
  padding: "56px 24px",
}));

export default ProductGrid;
