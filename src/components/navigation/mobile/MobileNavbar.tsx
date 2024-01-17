"use client";
import { toggle } from "@/providers/redux/features/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/providers/redux/hooks";
import { Box, Stack } from "@mui/material";
import { ReactNode, useEffect } from "react";
import Logo from "../../Logo";
import ImgSVG from "../../styled-component/ImgSVG";
import NavbarContainer from "../../styled-component/containers/NavbarContainer";
import { svgs } from "../../util/SVGImages";
interface MobileNavbarProps {
  navIcons?: ReactNode;
  children?: ReactNode;
}
// children is the dropdown
export default function MobileNavbar({
  navIcons,
  children,
}: MobileNavbarProps) {
  const show = useAppSelector((state) => state.navbar.show);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!show) {
      dispatch(toggle(false));
    }
  }, [show, dispatch]);
  return (
    <Stack
      flexDirection="column"
      sx={{
        display: { xs: "flex", lg: "none" },
      }}
    >
      <NavbarContainer
        width="100%"
        sx={{
          "&": { padding: { xs: "45px 36px", md: "var(--nav-padding-x)" } },
        }}
        height={{ xs: "auto", md: "var(--nav-height)" }}
      >
        <Logo sx={{ flexGrow: 1 }} />
        {navIcons ? (
          <Stack sx={{ gap: "24px", paddingX: { xs: "20px", md: "32px" } }}>
            {navIcons}
          </Stack>
        ) : null}

        <ImgSVG
          svg={svgs.menu}
          sx={{
            height: 14,
            width: 24,
            cursor: "pointer",
            "&:hover": { color: "text.muted" },
          }}
          onClick={() => dispatch(toggle(!show))}
        />
      </NavbarContainer>
      {children ? (
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          {children}
        </Box>
      ) : null}
    </Stack>
  );
}
