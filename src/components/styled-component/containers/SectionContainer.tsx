"use client";
import { Box, styled } from "@mui/material";

const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.light,
  flexDirection: "column",
  [theme.breakpoints.up("xs")]: {
    padding: "var(--content-padding-xs)",
  },
  [theme.breakpoints.up("md")]: {
    padding: "var(--content-padding-md)",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "var(--content-padding)",
  },
}));

export default SectionContainer;
