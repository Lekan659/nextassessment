import { SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";

interface ImgSVGProps {
  sx?: SxProps<Theme>;
  svg: JSX.Element;
}
export default function ImgSVG({
  sx = [],
  svg,
  ...rest
}: ImgSVGProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <Typography
      sx={[{ display: "inline-block" }, ...(Array.isArray(sx) ? sx : [sx])]}
      variant="body1"
      {...rest}
    >
      {svg}
    </Typography>
  );
}
