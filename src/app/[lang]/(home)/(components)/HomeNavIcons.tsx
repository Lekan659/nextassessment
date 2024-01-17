import ImgSVG from "@/components/styled-component/ImgSVG";
import { svgs } from "@/components/util/SVGImages";

export default function HomeNavIcons() {
  return (
    <>
      <ImgSVG
        svg={svgs.searchGlass}
        sx={{
          cursor: "pointer",
          height: 24,
          width: 24,
          "&:hover": { color: "text.muted" },
        }}
      />
      <ImgSVG
        svg={svgs.cart}
        sx={{
          height: 24,
          width: 24,
          cursor: "pointer",
          "&:hover": { color: "text.muted" },
        }}
      />
    </>
  );
}
