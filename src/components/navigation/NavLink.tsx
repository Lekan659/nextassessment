import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import ImgSVG from "../styled-component/ImgSVG";
import CustomNextLink from "../styled-component/custom/CustomNextLink";
import { svgs } from "../util/SVGImages";

interface NavLinkProps {
  text:string;
  link: string;
  isDropdown?: boolean;
  sx?: SxProps<Theme>;
}
export default function NavLink({
  text,
  link,
  isDropdown = false,
  sx,
}: NavLinkProps) {
  return (
    <CustomNextLink
      key={link}
      href={`/${link.toLocaleLowerCase()}`}
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]),
        {
          display: "flex",
          alignItems: "center",
          gap: { xs: "9px" },
          color: "text.secondary",
          fontWeight: "700",
          "&:hover": { color: "text.primary" },
        },
      ]}
    >
      {text}
      {isDropdown ? (
        <ImgSVG svg={svgs.chevronDown} sx={{ height: 15, width: 10 }} />
      ) : null}
    </CustomNextLink>
  );
}
