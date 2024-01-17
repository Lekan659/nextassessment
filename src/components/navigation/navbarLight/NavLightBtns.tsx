"use client";
import { set } from "@/providers/redux/features/popupSlice";
import { useAppDispatch, useAppSelector } from "@/providers/redux/hooks";
import { Dictionary } from "@/types/lang";
import { Stack, Typography, styled } from "@mui/material";
import ImgSVG from "../../styled-component/ImgSVG";
import CustomNextLink from "../../styled-component/custom/CustomNextLink";
import { svgs } from "../../util/SVGImages";

interface NavLightBtnsProps {
  dictionary: Dictionary;
}
const NavBtnContainer = styled(Stack)(({ theme }) => ({
  gap: 5,
  cursor: "pointer",
  "&:hover :where(span, span:has(svg))": {
    color: theme.palette.text.primary,
  },
}));

const MenuBtns = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));
export default function NavLightBtns({ dictionary }: NavLightBtnsProps) {
  const dispatch = useAppDispatch();
  const { quantity } = useAppSelector((state) => state.cart.userCart);
  const userWishlist = useAppSelector((state) => state.wishlist.userWishlist);
  return (
    <Stack
      gap="30px"
      color="primary.main"
      direction={{ xs: "column", md: "row" }}
    >
      <CustomNextLink href="/">
        <NavBtnContainer>
          <ImgSVG
            svg={svgs.user}
            sx={{ height: { xs: 28, md: 14 }, width: { xs: 28, md: 14 } }}
          />
          <MenuBtns
            sx={{ whiteSpace: "nowrap" }}
            fontWeight={700}
            variant="body1"
          >
            {dictionary.login + " / " + dictionary.register}
          </MenuBtns>
        </NavBtnContainer>
      </CustomNextLink>
      <ImgSVG
        svg={svgs.searchGlass}
        sx={{
          "&:hover": { color: "text.primary", cursor: "pointer" },
          height: { xs: 34, md: 16 },
          width: { xs: 34, md: 16 },
        }}
      />

      <NavBtnContainer
        onClick={() => dispatch(set({ popupName: "cart", show: true }))}
      >
        <ImgSVG
          svg={svgs.cart}
          sx={{
            height: { xs: 37, md: 16 },
            width: { xs: 37, md: 16 },
          }}
        />
        <MenuBtns variant="body1">{quantity ?? 0}</MenuBtns>
      </NavBtnContainer>
      <NavBtnContainer
        onClick={() => dispatch(set({ popupName: "wishlist", show: true }))}
      >
        <ImgSVG
          svg={svgs.heart}
          sx={{
            height: { xs: 37, md: 16 },
            width: { xs: 37, md: 16 },
          }}
        />
        <MenuBtns variant="body1">
          {userWishlist && userWishlist.items ? userWishlist.items.length : 0}
        </MenuBtns>
      </NavBtnContainer>
    </Stack>
  );
}
