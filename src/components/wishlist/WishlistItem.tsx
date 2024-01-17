"use client";
import { set } from "@/providers/redux/features/popupSlice";
import { removeItemFromWishlist } from "@/providers/redux/features/wishlistSlice";
import { useAppDispatch } from "@/providers/redux/hooks";
import { UserWishlistItem } from "@/types/userWishlist";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UserItemContainer from "../styled-component/containers/UserItemContainer";
import UserItemRemove from "../user-item/UserItemRemove";
import UserInfoTitle from "../user-item/UserItemTitle";

interface WishlistItemProps {
  item: UserWishlistItem;
}
export default function WishlistItem({ item }: WishlistItemProps) {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  //cart item functions
  const goToDetailsPage = () => {
    push(`/products/${item.id}`);
    dispatch(set({ popupName: null, show: false }));
  };
  return (
    <UserItemContainer gap="8px">
      <Box onClick={goToDetailsPage}>
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
      </Box>
      <Stack direction="column" gap="16px">
        <Stack
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
          padding="4px"
        >
          <UserInfoTitle onClick={goToDetailsPage} title={item.title} />
          <UserItemRemove
            onClick={() => dispatch(removeItemFromWishlist(item.id))}
          />
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "text.grayText1",
            fontWeight: 400,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.description}
        </Typography>
      </Stack>
    </UserItemContainer>
  );
}
