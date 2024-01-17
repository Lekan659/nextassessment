"use client";

import NavLinkList from "@/components/navigation/NavLinkList";
import MobileNavbar from "@/components/navigation/mobile/MobileNavbar";
import NavbarContainer from "@/components/styled-component/containers/NavbarContainer";
import { useAppSelector } from "@/providers/redux/hooks";
import { Dictionary } from "@/types/lang";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import HomeNavIcons from "./HomeNavIcons";
interface HomeNavbarProps {
  navLang: Dictionary["home"]["navbar"];
}

export default function HomeNavbar({ navLang }: HomeNavbarProps) {
  const show = useAppSelector((state) => state.navbar.show);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const display = useMemo(() => show && !isDesktop, [show, isDesktop]);
  return (
    <MobileNavbar navIcons={<HomeNavIcons />}>
      <NavbarContainer
        height={
          display ? { xs: "auto", md: "var(--nav-height)" } : { xs: 0, md: 0 }
        }
        padding={
          display
            ? { xs: "98px", md: "var(--nav-padding-x)" }
            : { xs: 0, md: 0 }
        }
        sx={{
          opacity: display ? "100%" : "0%",
          pointerEvents: display ? "auto" : "none",
          transition: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "300ms",
        }}
      >
        <NavLinkList links={navLang} />
      </NavbarContainer>
    </MobileNavbar>
  );
}