"use client";
import { Box } from "@mui/material";

export default function LoadingView() {
  return (
    <Box
      sx={{
        padding: "2px 0",
        "& :where(span:has(svg))": {
          height: 16,
          width: 16,
          color: "primary.main",
        },
        "& :where(svg)": {
          animation: "spin 1s linear infinite",
        },
      }}
    >
      <span>
        <svg
          style={{ height: "inherit", width: "inherit" }}
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            style={{ opacity: 0.25 }}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            style={{ opacity: 0.75 }}
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </span>
    </Box>
  );
}
