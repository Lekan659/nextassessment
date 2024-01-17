"use client";
import { NavbarProps } from "@/types/navbar";
import { Box } from "@mui/material";
import NavbarDark from "./NavbarDark";
import NavbarLight from "./navbarLight/NavbarLight";

export default function Navbars({ dictionary }: NavbarProps) {
  return (
    <Box sx={{ display: { xs: "none", lg: "block" } }}>
      <NavbarDark dictionary={dictionary} />
      <NavbarLight dictionary={dictionary} />
    </Box>
  );
}
