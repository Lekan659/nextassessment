import { getWishlist } from "@/lib/wishlist";
import { Product } from "@/types/product";
import { UserWishlist } from "@/types/userWishlist";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface WishlistState {
  userWishlist: UserWishlist;
}
const initialState: WishlistState = {
  userWishlist: getWishlist(),
};
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductToWishlist: (state, action: PayloadAction<Product>) => {
      const wishlist = state.userWishlist;
      const item = action.payload;
      //check if item exists
      const currItemIndex = wishlist.items.findIndex(
        (wishlistItem) => wishlistItem.id === item.id
      );
      //if item exists return
      if (currItemIndex > -1) {
        return;
      }
      //else add new product to wishlist
      const { id, title, thumbnail, description } = item;
      wishlist.items = [
        ...wishlist.items,
        { id, title, thumbnail, description },
      ];
    },
    removeItemFromWishlist: (state, action: PayloadAction<number>) => {
      const wishlist = state.userWishlist;
      const id = action.payload;
      const currItemIndex = wishlist.items.findIndex(
        (wishlistItem) => wishlistItem.id === id
      );
      if (currItemIndex > -1) {
        wishlist.items.splice(currItemIndex, 1);
      }
    },
  },
});

export const { addProductToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
