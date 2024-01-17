"use client";
import SectionContainer from "@/components/styled-component/containers/SectionContainer";
import { Dictionary } from "@/types/lang";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface OtherInfoSectionProps {
  otherInfoLang: Dictionary["product"]["otherInfo"];
}
export default function OtherInfoSection({
  otherInfoLang,
}: OtherInfoSectionProps) {
  return (
    <SectionContainer
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: { xs: "center", lg: "flex-start" },
        flexDirection: {
          lg: "row",
        },
        gap: "30px",
        padding: "24px 195px 48px 195px",
      }}
    >
      <Stack
        direction="column"
        alignItems={{ xs: "center", lg: "flex-start" }}
        sx={{
          gap: "30px",
          paddingBottom: "25px",
          width: { xs: "100%", md: "70%" },
        }}
      >
        <Typography variant="h5">{otherInfoLang.title}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {otherInfoLang.content}
        </Typography>
        <Box
          sx={{
            paddingLeft: "24px",
            borderLeft: "3px solid",
            borderLeftColor: "secondary.main",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {otherInfoLang.content}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {otherInfoLang.content}
        </Typography>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: { xs: "295px", md: "413px" },
          height: { xs: "321px", md: "372px" },
          "& :where(img)": { borderRadius: "5.386px" },
        }}
      >
        <Image
          src="/images/other-info-img-1.jpeg"
          alt="Other info image"
          fill
          sizes="(max-width: 600px) 413px, 295px"
        />
      </Box>
    </SectionContainer>
  );
}
