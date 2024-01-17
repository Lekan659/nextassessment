"use client";
import { Stack, Typography } from "@mui/material";
import ImgSVG from "../styled-component/ImgSVG";
import CustomNextLink from "../styled-component/custom/CustomNextLink";
import { svgs } from "../util/SVGImages";

interface BreadCrumbsProps {
  paths: string[];
}
export default function BreadCrumbs({ paths }: BreadCrumbsProps) {
  return (
    <Stack
      gap="15px"
      padding="24px 0"
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {paths.map((path, i) => (
        <Crumbs key={`path-${i}`} name={path} i={i} />
      ))}
    </Stack>
  );
}

interface CrumbProps {
  name: string;
  i: number;
}
function Crumbs({ name, i }: CrumbProps) {
  if (i === 0) {
    return (
      <CustomNextLink
        href="/"
        sx={{
          color: "text.primary",
          "&:hover :where(h6)": { color: "primary.main" },
        }}
      >
        <Typography variant="h6">{name}</Typography>
      </CustomNextLink>
    );
  }
  return (
    <>
      <ImgSVG
        svg={svgs.arrowNext}
        sx={{ height: 16, width: 9, color: "text.muted" }}
      />
      <Typography variant="h6" sx={{ color: "text.muted" }}>
        {name}
      </Typography>
    </>
  );
}
