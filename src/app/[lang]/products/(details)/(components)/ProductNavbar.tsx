"use client";
import NavLightLinks from "@/components/navigation/NavLinkList";
import MobileNavbar from "@/components/navigation/mobile/MobileNavbar";
import NavbarContainer from "@/components/styled-component/containers/NavbarContainer";
import { useAppSelector } from "@/providers/redux/hooks";
import { Dictionary } from "@/types/lang";
import { useMediaQuery, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import { useMemo } from "react";
const NavLightBtns = dynamic(
  () => import("@/components/navigation/navbarLight/NavLightBtns"),
  { ssr: false }
);

interface ProductNavbarProps {
  dictionary: Dictionary;
}
export default function ProductNavbar({ dictionary }: ProductNavbarProps) {
  const { links } = dictionary.navbarLight;
  const show = useAppSelector((state) => state.navbar.show);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const display = useMemo(() => show && !isDesktop, [show, isDesktop]);
  return (
    <MobileNavbar>
      <NavbarContainer
        height={
          display ? { xs: "auto", md: "var(--nav-height)" } : { xs: 0, md: 0 }
        }
        flexDirection={{ xs: "column", md: "row" }}
        gap="30px"
        padding={
          display
            ? { xs: "90px 0 40px", md: "var(--nav-padding-x)" }
            : { xs: 0, md: 0 }
        }
        width={"100%"}
        sx={{
          opacity: display ? "100%" : "0%",
          pointerEvents: display ? "auto" : "none",
          transition: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "300ms",
        }}
      >
        <NavLightLinks links={links} />
        <NavLightBtns dictionary={dictionary} />
      </NavbarContainer>
    </MobileNavbar>
  );
}
