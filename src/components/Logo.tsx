"use client";
import { Link, SxProps, Theme, Typography } from "@mui/material";
import NextLink from "next/link";

interface LogoProps {
  sx?: SxProps<Theme>;
}
export default function Logo({ sx = [] }: LogoProps) {
  return (
    <Typography
      variant="h3"
      sx={[
        { minWidth: "var(--logo-width)" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Link
        href="/"
        component={NextLink}
        sx={{ color: "text.primary", "&:hover": { color: "text.muted" } }}
      >
        Bandage
      </Link>
    </Typography>
  );
}
