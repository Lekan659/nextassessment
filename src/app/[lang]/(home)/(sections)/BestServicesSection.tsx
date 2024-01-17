"use client";
import SectionContainer from "@/components/styled-component/containers/SectionContainer";
import { servicesSVG } from "@/components/util/SVGImages";
import { Dictionary } from "@/types/lang";
import { Box, Stack, Typography } from "@mui/material";
import SectionHeader from "../(components)/SectionHeader";

interface BestServicesSectionProps {
  servicesLang: Dictionary["home"]["services"];
}

interface ServicesItemProps {
  key?: string;
  icon: JSX.Element;
  title: string;
  desc: string;
}
export default function BestServicesSection({
  servicesLang,
}: BestServicesSectionProps) {
  const servicesGridItems: ServicesItemProps[] = Object.keys(
    servicesLang.grid
  ).map((item) => ({
    key: item,
    icon: servicesSVG[item],
    title: servicesLang.grid[item as keyof typeof servicesLang.grid][0],
    desc: servicesLang.grid[item as keyof typeof servicesLang.grid][1],
  }));
  return (
    <SectionContainer sx={{ gap: "80px" }}>
      <SectionHeader
        subtitle={servicesLang.featuredProducts}
        title={servicesLang.bestServices}
        desc={servicesLang.problemsResolve}
      />
      <Box
        sx={{
          display: "grid",
          gap: {
            xs: "100px",
            md: "70px",
          },
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
        }}
      >
        {servicesGridItems.map(({ key, icon, title, desc }) => (
          <ServicesItem
            key={key as string}
            icon={icon}
            title={title}
            desc={desc}
          />
        ))}
      </Box>
    </SectionContainer>
  );
}
function ServicesItem({ icon, title, desc }: ServicesItemProps) {
  return (
    <Stack
      direction="column"
      sx={{
        gap: "20px",
        textAlign: "center",
        "& :where(span:has(svg))": {
          color: "primary.main",
          height: 72,
          width: 72,
        },
      }}
    >
      <span>{icon}</span>
      <Typography variant="h3" sx={{ color: "text.primary" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>{desc}</Typography>
    </Stack>
  );
}
