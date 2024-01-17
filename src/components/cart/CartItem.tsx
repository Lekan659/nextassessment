"use client";
import QtyBtns from "@/components/buttons/QtyBtns";
import UserInfoImgContainer from "@/components/styled-component/containers/UserInfoImgContainer";
import UserItemContainer from "@/components/styled-component/containers/UserItemContainer";
import UserItemRemove from "@/components/user-item/UserItemRemove";
import UserInfoTitle from "@/components/user-item/UserItemTitle";
import { formatPrice } from "@/lib/format";
import {
  addItemQtyToCart,
  removeItemFromCart,
  removeItemQtyToCart,
} from "@/providers/redux/features/cartSlice";
import { set } from "@/providers/redux/features/popupSlice";
import { useAppDispatch } from "@/providers/redux/hooks";
import { UserCartItem } from "@/types/userCart";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CartItemProps {
  item: UserCartItem;
}
export default function CartItem({ item }: CartItemProps) {
  const [itemQty, setItemQty] = useState(item.quantity ?? 0);
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  //cart item functions
  const goToDetailsPage = () => {
    push(`/products/${item.id}`);
    dispatch(set({ popupName: null, show: false }));
  };

  const changeItemQty = (num: number) => {
    setItemQty((prev) => prev + num);
    if (num > 0) {
      dispatch(addItemQtyToCart(item.id));
    } else {
      dispatch(removeItemQtyToCart(item.id));
    }
  };

  useEffect(() => {
    setItemQty(item.quantity);
  }, [item.quantity]);
  return (
    <UserItemContainer>
      <UserInfoImgContainer onClick={goToDetailsPage}>
        <Box
          position="relative"
          height="auto"
          width={{
            xs: "112px",
            sm: "320px",
          }}
          sx={{
            aspectRatio: {
              xs: "1/1",
              sm: "4/3",
            },
          }}
        >
          <Image
            src={item.thumbnail}
            alt={item.title}
            sizes="(min-width: 600px) 320px, 112px"
            fill
          />
        </Box>
      </UserInfoImgContainer>
      <Stack
        direction="column"
        justifyContent="space-between"
        flexGrow={1}
        padding={{ xs: "4px", md: "8px" }}
      >
        <Stack
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
        >
          <Stack alignItems="start" direction="column" gap="4px">
            <UserInfoTitle onClick={goToDetailsPage} title={item.title} />
            <Typography variant="body1" fontWeight={600} color="text.grayText1">
              {formatPrice(item.price)}
            </Typography>
          </Stack>
          <UserItemRemove
            onClick={() => dispatch(removeItemFromCart(item.id))}
          />
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          gap="8px"
          justifyContent="space-between"
          width="100%"
        >
          <QtyBtns
            qty={itemQty}
            changeItemQty={changeItemQty}
            sx={{ marginTop: "auto" }}
          />
          <Typography variant="h5" alignSelf={{ xs: "flex-end" }}>
            {formatPrice(item.price * item.quantity ?? 0)}
          </Typography>
        </Stack>
      </Stack>
    </UserItemContainer>
  );
}
