import { Stack, Typography } from "@mui/material";

interface RowLabelValProps {
  label: string;
  value: string | number;
}
export default function RowLabelVal({ label, value }: RowLabelValProps) {
  return (
    <Stack gap="4px" justifyContent="flex-end" width="100%">
      <Typography variant="h5" color="text.secondary">
        {label}:
      </Typography>
      <Typography variant="h5">{value ?? 0}</Typography>
    </Stack>
  );
}
