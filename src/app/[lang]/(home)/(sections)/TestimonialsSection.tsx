"use client";
import SectionContainer from "@/components/styled-component/containers/SectionContainer";
import { Dictionary } from "@/types/lang";
import { Stack, Typography } from "@mui/material";
import TestimonialGrid from "../(components)/TestimonialGrid";
import TestimonialIndiv from "../(components)/TestimonialIndiv";
interface TestimonialsSectionProps {
  testimonialsLang: Dictionary["home"]["testimonials"];
}

export default function TestimonialsSection({
  testimonialsLang,
}: TestimonialsSectionProps) {
  return (
    <SectionContainer sx={{ padding: { md: "80px 117px", xs: "90px 24px" } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        sx={{ width: "100%", padding: { xs: 0, lg: "48px" } }}
      >
        <Stack direction="column" sx={{ gap: "28px" }}>
          <Typography
            variant="h3"
            sx={{ paddingTop: "18px", textAlign: "center" }}
          >
            {testimonialsLang.whatTheySay}
          </Typography>
          <TestimonialIndiv />
        </Stack>
        <TestimonialGrid />
      </Stack>
    </SectionContainer>
  );
}
