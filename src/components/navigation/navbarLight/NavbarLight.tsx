"use client";
import { NavbarProps } from "@/types/navbar";
import { Stack, styled } from "@mui/material";
import dynamic from "next/dynamic";
import Logo from "../../Logo";
import NavbarContainer from "../../styled-component/containers/NavbarContainer";
import NavLightLinks from "../NavLinkList";
const NavLightBtns = dynamic(() => import("./NavLightBtns"), { ssr: false });

const NavbarLightBox = styled(NavbarContainer)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.light,
  width: "100%",
}));

const NavLinkContainer = styled(Stack)({
  justifyContent: "space-between",
  width: "100%",
});
export default function NavbarLight({ dictionary }: NavbarProps) {
  const { links } = dictionary.navbarLight;
  const hasDropdown = ["Shop"];
  return (
    <nav>
      <NavbarLightBox>
        <Logo sx={{ width: "17%" }} />
        <NavLinkContainer>
          <NavLightLinks links={links} hasDropdown={hasDropdown} />
          <NavLightBtns dictionary={dictionary} />
        </NavLinkContainer>
      </NavbarLightBox>
    </nav>
  );
}
