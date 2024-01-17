"use client";
import { NavbarProps } from "@/types/navbar";
import { Stack, styled } from "@mui/material";
import NextLink from "next/link";
import { ReactNode } from "react";
import ImgSVG from "../styled-component/ImgSVG";
import NavbarContainer from "../styled-component/containers/NavbarContainer";
import CustomNextLink from "../styled-component/custom/CustomNextLink";
import { socialLinksSVG, svgs } from "../util/SVGImages";

const NavbarDarkBox = styled(NavbarContainer)(({ theme }) => ({
  justifyContent: "space-between",
  color: theme.palette.text.light,
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  "& span": {
    fontWeight: 700,
  },
  "& span:has(svg)": {
    height: 16,
    width: 16,
  },

  "& a:hover :where(span:has(svg))": {
    color: theme.palette.text.muted,
  },
}));

const socialLinks = [
  {
    key: "instagram",
    href: "https://www.instagram.com/",
  },
  {
    key: "youtube",
    href: "https://www.youtube.com/",
  },
  {
    key: "facebook",
    href: "https://www.facebook.com/",
  },
  {
    key: "twitter",
    href: "https://www.twitter.com/",
  },
];
export default function NavbarDark({ dictionary }: NavbarProps) {
  return (
    <nav>
      <NavbarDarkBox>
        <Stack sx={{ gap: "30px" }}>
          <ContactLink href="tel:(225) 555-0118">
            <span>{svgs.phone}</span>
            <span>(225) 555-0118</span>
          </ContactLink>
          <ContactLink href="mailto:michelle.rivera@example.com">
            <span>{svgs.mail}</span>
            <span>michelle.rivera@example.com</span>
          </ContactLink>
        </Stack>
        <span>{dictionary.navbarDark.followWin80off}</span>
        <Stack sx={{ gap: "10px" }}>
          <span>{dictionary.navbarDark.followUs}</span>
          <Stack sx={{ gap: "16px" }}>
            {socialLinks.map((link) => (
              <NextLink
                href={link.href}
                key={link.key}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.href}
              >
                <ImgSVG
                  svg={socialLinksSVG[link.key]}
                  sx={{ height: 16, width: 16 }}
                />
              </NextLink>
            ))}
          </Stack>
        </Stack>
      </NavbarDarkBox>
    </nav>
  );
}
interface ContactLinkProps {
  href: string;
  children: ReactNode;
}
function ContactLink({ href, children }: ContactLinkProps) {
  return (
    <CustomNextLink
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        color: "text.light",
        "&:hover :where(span, span:has(svg))": {
          color: "text.muted",
        },
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </CustomNextLink>
  );
}
