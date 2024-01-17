"use client";
import SectionContainer from "@/components/styled-component/containers/SectionContainer";
import CustomBtn from "@/components/styled-component/custom/CustomBtn";
import { formatPrice } from "@/lib/format";
import { Dictionary } from "@/types/lang";
import { Stack, Typography } from "@mui/material";
interface BetterExpSectionProps {
  betterExpLang: Dictionary["home"]["betterExp"];
}
export default function BetterExpSection({
  betterExpLang,
}: BetterExpSectionProps) {
  return (
    <SectionContainer
      sx={{
        padding: "160px 195px 112px 195px",
        alignItems: "center",
        background:
          "url(/images/background/bg-better-exp.jpeg) lightgray 50% / cover no-repeat",
      }}
    >
      <Stack
        direction="column"
        sx={{ gap: "30px", maxWidth: "607px", textAlign: "center" }}
      >
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          {betterExpLang.designBetter}
        </Typography>
        <Typography variant="h2">{betterExpLang.problemsResolve}</Typography>
        <Typography variant="body2">
          {betterExpLang.problemsResolveConf}
        </Typography>
        <Typography variant="h3" sx={{ color: "secondary.main" }}>
          {formatPrice(16.48)}
        </Typography>
        <CustomBtn
          variant="contained"
          size="medium"
          sx={{ color: "text.light" }}
        >
          {betterExpLang.callToAction}
        </CustomBtn>
      </Stack>
    </SectionContainer>
  );
}
