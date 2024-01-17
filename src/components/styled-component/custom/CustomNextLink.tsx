"use client";
import { Link, SxProps, Theme } from "@mui/material";
import NextLink from "next/link";
import { ReactNode } from "react";

interface CustomNextLinkProps {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
  target?: string;
  rel?: string;
}

export default function CustomNextLink({
  href,
  sx,
  children,
  target,
  rel,
}: CustomNextLinkProps) {
  return (
    <Link href={href} component={NextLink} sx={sx} target={target} rel={rel}>
      {children}
    </Link>
  );
}
