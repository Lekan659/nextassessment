"use client";
import { IconButton, SxProps, Theme } from "@mui/material";
import ImgSVG from "../styled-component/ImgSVG";
interface IconBtnProps {
  label: string;
  icon: JSX.Element;
  height: number;
  width: number;
  onClick: () => void;
  sx?: SxProps<Theme>;
  disabled?: boolean;
}
export default function IconBtn({
  label,
  icon,
  height,
  width,
  onClick,
  sx,
  disabled = false,
}: IconBtnProps) {
  return (
    <IconButton
      onClick={() => onClick?.()}
      aria-label={label}
      sx={sx}
      disabled={disabled}
    >
      <ImgSVG svg={icon} sx={{ height, width }} />
    </IconButton>
  );
}
