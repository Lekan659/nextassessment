"use client";
import { Box } from "@mui/material";

interface FilledCx {
  size: number;
  bgColor: string;
}
export default function FilledCx({ size, bgColor }: FilledCx) {
  return (
    <Box
      sx={{
        height: size,
        width: size,
        backgroundColor: bgColor,
        borderRadius: 999,
        cursor: "pointer",
        "&:hover": {
          opacity: 0.5,
        },
      }}
    />
  );
}
