import { Box, styled } from "@mui/material";

const UserInfoImgContainer = styled(Box)({
  display: "inline-block",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  overflow: "hidden",
  "& :where(img)": {
    height: "auto",
    width: "100%",
    transition: "transform 0.2s",
  },
  "&:hover :where(img)": {
    cursor: "pointer",
    transform: "scale(1.1)",
  },
});

export default UserInfoImgContainer;
