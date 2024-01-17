import { Stack } from "@mui/material";
import ImgSVG from "../styled-component/ImgSVG";
import { svgs } from "../util/SVGImages";

interface UserItemRemoveProps {
  onClick: () => void;
}
export default function UserItemRemove({ onClick }: UserItemRemoveProps) {
  return (
    <Stack alignItems="flex-end">
      <ImgSVG
        svg={svgs.cross}
        sx={{
          "&": {
            flexGrow: 1,
          },
          height: "24px",
          width: "24px",
          cursor: "pointer",
          "&:hover :where(svg)": {
            color: "primary.main",
          },
        }}
        onClick={() => onClick?.()}
      />
    </Stack>
  );
}
