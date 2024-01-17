"use client";
import { Typography } from "@mui/material";

interface UserInfoTitleProps {
  onClick: () => void;
  title: string;
}

export default function UserInfoTitle({ onClick, title }: UserInfoTitleProps) {
  return (
    <Typography
      id="title"
      variant="body1"
      color="primary.main"
      fontWeight={600}
      sx={{
        "&:hover": { cursor: "pointer", color: "text.primary" },
        fontSize: "16px",
      }}
      onClick={() => onClick?.()}
    >
      {title}
    </Typography>
  );
}
