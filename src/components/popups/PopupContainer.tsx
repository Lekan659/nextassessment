"use client";
import { useScrollable } from "@/hooks/scrollable";
import { set } from "@/providers/redux/features/popupSlice";
import { useAppDispatch } from "@/providers/redux/hooks";
import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import ImgSVG from "../styled-component/ImgSVG";
import { svgs } from "../util/SVGImages";

interface PopupProps {
  show: boolean;
  title: string;
  children: ReactNode;
}
export default function PopupContainer({ show, title, children }: PopupProps) {
  const dispatch = useAppDispatch();
  useScrollable(show);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      position="fixed"
      height="100vh"
      width="100vw"
      zIndex={50}
      top={0}
      left={0}
      padding={{ xs: "0 24px", sm: 0 }}
      sx={{
        opacity: show ? "100%" : "0%",
        translate: show ? "-10px" : "0",
        transition: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "500ms",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      {/* modal content container */}
      <Box
        height="max-content"
        width="100%"
        maxWidth={{ xs: "none", sm: "672px", md: "768px" }}
        display={show ? "" : "none"}
        bgcolor="background.light"
        zIndex={40}
        borderRadius="8px"
        maxHeight={450}
        sx={{
          overflowY: "scroll",
        }}
      >
        <Stack
          direction="column"
          position="sticky"
          top={0}
          zIndex={40}
          paddingTop={2}
          bgcolor="background.light"
        >
          <Stack
            justifyContent="flex-end"
            paddingX={{ xs: "16px", md: "24px", lg: "32px" }}
            width="100%"
          >
            <ImgSVG
              svg={svgs.cross}
              sx={{
                height: "24px",
                width: "24px",
                cursor: "pointer",
                "&:hover :where(svg)": {
                  color: "text.muted",
                },
              }}
              onClick={() => dispatch(set({ popupName: null, show: false }))}
            />
          </Stack>
          <Typography variant="h3" textAlign="center">
            {title}
          </Typography>
        </Stack>
        {show && (
          <Box padding={{ xs: "24px", md: "32px", lg: "40px" }}>{children}</Box>
        )}
      </Box>
      {/* modal overlay */}
      <Box
        position="fixed"
        zIndex={show ? 30 : ""}
        display={!show ? "none" : ""}
        height="100vh"
        width="100vw"
        bgcolor="background.overlay"
        top={0}
        onClick={() => dispatch(set({ popupName: null, show: false }))}
      />
    </Stack>
  );
}
