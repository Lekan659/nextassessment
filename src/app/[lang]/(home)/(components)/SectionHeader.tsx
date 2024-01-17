import { Stack, Typography } from "@mui/material";
interface SectionHeaderProps {
  title: string;
  subtitle: string;
  desc: string;
}
export default function SectionHeader({
  title,
  subtitle,
  desc,
}: SectionHeaderProps) {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        gap: "10px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "text.secondary",
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h3"
        sx={{ color: "text.primary", textTransform: "uppercase" }}
      >
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {desc}
      </Typography>
    </Stack>
  );
}
