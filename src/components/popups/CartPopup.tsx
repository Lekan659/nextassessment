"use client";
import { useCheckLocalStorage } from "@/hooks/localStorage";
import { formatPrice } from "@/lib/format";
import { set } from "@/providers/redux/features/popupSlice";
import { useAppDispatch, useAppSelector } from "@/providers/redux/hooks";
import { Dictionary } from "@/types/lang";
import { Divider, Stack, Typography } from "@mui/material";
import RowLabelVal from "../RowLabelVal";
import CartItem from "../cart/CartItem";
import NoData from "../util/NoData";
import PopupContainer from "./PopupContainer";

interface CartPopupProps {
  show: boolean;
  cartLang: Dictionary["popups"]["cart"];
  msgsLang: Dictionary["msgs"];
}

export default function CartPopup({
  show,
  cartLang,
  msgsLang,
}: CartPopupProps) {
  const dispatch = useAppDispatch();
  const userCart = useAppSelector((state) => state.cart.userCart);
  const { enabled } = useCheckLocalStorage(show);
  if (!enabled) {
    alert(msgsLang.enableLocalStorage);
    dispatch(set({ popupName: null, show: false }));
    return;
  }
  return (
    <PopupContainer title={cartLang.yourCart} show={show}>
      {userCart.items && userCart.items.length > 0 ? (
        <>
          <Typography variant="h4">{cartLang.items}</Typography>
          <Stack direction="column" paddingY={2} gap={8}>
            {userCart.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Stack>
          <Divider
            variant="middle"
            sx={{
              margin: "16px 0",
              backgroundColor: "text.muted",
            }}
          />
          <RowLabelVal label={cartLang.quantity} value={userCart.quantity} />
          <RowLabelVal
            label={cartLang.total}
            value={formatPrice(userCart.total ?? 0)}
          />
        </>
      ) : (
        <NoData>{cartLang.cartEmpty}</NoData>
      )}
    </PopupContainer>
  );
}
