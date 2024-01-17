import userPic from "@/assets/images/user.png";
import ImgSVG from "@/components/styled-component/ImgSVG";
import { svgs } from "@/components/util/SVGImages";
import { Box, Stack, Typography } from "@mui/material";

export default function TestimonialIndiv() {
  return (
    <Stack
      direction="column"
      sx={{ gap: "20px", padding: { xs: "48px", md: "30px 35px" } }}
    >
      <Box
        sx={{
          height: "90px",
          width: "90px",
          border: "1.8px solid",
          borderColor: "text.muted",
          borderRadius: "90px",
          background: `url(${userPic.src}) lightgray 50% / cover no-repeat`,
        }}
      />
      <Stack sx={{ gap: "5px" }}>
        <ImgSVG svg={svgs.bxsStar} sx={{ height: 22, width: 22 }} />
        <ImgSVG svg={svgs.bxsStar} sx={{ height: 22, width: 22 }} />
        <ImgSVG svg={svgs.bxsStar} sx={{ height: 22, width: 22 }} />
        <ImgSVG svg={svgs.bxsStar} sx={{ height: 22, width: 22 }} />
        <ImgSVG svg={svgs.bxStar} sx={{ height: 22, width: 22 }} />
      </Stack>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", color: "text.secondary" }}
      >
        {`Slate helps you see how many more days you need to work to reach your financial goal.`}
      </Typography>
      <Stack direction="column">
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >{`Regina Miles`}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 700 }}
        >{`Designer`}</Typography>
      </Stack>
    </Stack>
  );
}
