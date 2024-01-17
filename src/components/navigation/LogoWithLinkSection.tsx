"use client";

import { Divider, Stack } from "@mui/material";
import NextLink from "next/link";
import Logo from "../Logo";
import ImgSVG from "../styled-component/ImgSVG";
import SectionContainer from "../styled-component/containers/SectionContainer";
import { socialLinksSVG } from "../util/SVGImages";

const socialLinks = [
  {
    key: "facebook",
    href: "https://www.facebook.com/",
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/",
  },
  {
    key: "twitter",
    href: "https://www.twitter.com/",
  },
];
interface LogoWithLinkSectionProps {
  bgColor?: string;
}
export default function LogoWithLinkSection({
  bgColor = "background.lightGray",
}: LogoWithLinkSectionProps) {
  return (
    <SectionContainer
      sx={{
        "&": { padding: 0, backgroundColor: bgColor },
      }}
    >
      <Stack
        direction="column"
        sx={{
          width: "100%",
          padding: {
            xs: "0 45px",
            lg: "0 195px",
          },
        }}
      >
        <Stack
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: "24px",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            padding: {
              xs: "40px 0",
              lg: "40px 0",
            },
            width: "100%",
          }}
        >
          <Logo />
          <Stack sx={{ gap: "20px" }}>
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
                  sx={{ height: 24, width: 24, color: "primary.main" }}
                />
              </NextLink>
            ))}
          </Stack>
        </Stack>
        <Divider
          variant="middle"
          sx={{ backgroundColor: "background.gray1", width: "100%" }}
        />
      </Stack>
    </SectionContainer>
  );
}
