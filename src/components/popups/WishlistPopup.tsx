"use client";

import { useCheckLocalStorage } from "@/hooks/localStorage";
import { set } from "@/providers/redux/features/popupSlice";
import { useAppDispatch, useAppSelector } from "@/providers/redux/hooks";
import { Dictionary } from "@/types/lang";
import { Stack, Typography } from "@mui/material";
import NoData from "../util/NoData";
import WishlistItem from "../wishlist/WishlistItem";
import PopupContainer from "./PopupContainer";

interface WishlistPopupProps {
  show: boolean;
  wishlistLang: Dictionary["popups"]["wishlist"];
  msgsLang: Dictionary["msgs"];
}

export default function WishlistPopup({
  show,
  wishlistLang,
  msgsLang,
}: WishlistPopupProps) {
  const dispatch = useAppDispatch();
  const userWishlist = useAppSelector((state) => state.wishlist.userWishlist);
  const { enabled } = useCheckLocalStorage(show);
  if (!enabled) {
    alert(msgsLang.enableLocalStorage);
    dispatch(set({ popupName: null, show: false }));
    return;
  }
  return (
    <PopupContainer title={wishlistLang.yourWishlist} show={show}>
      {userWishlist.items && userWishlist.items.length > 0 ? (
        <>
          <Typography variant="h4">{wishlistLang.items}</Typography>
          <Stack direction="column" paddingY={2} gap={8}>
            {userWishlist.items.map((item) => (
              <WishlistItem key={item.id} item={item} />
            ))}
          </Stack>
        </>
      ) : (
        <NoData>{wishlistLang.wishlistEmpty}</NoData>
      )}
    </PopupContainer>
  );
}
