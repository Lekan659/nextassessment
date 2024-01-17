import { saveUserInfoToLocalStorage } from "@/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import navbarReducer from "./features/navbarSlice";
import popupReducer from "./features/popupSlice";
import wishlistReducer from "./features/wishlistSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    popup: popupReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

store.subscribe(() => {
  const { cart, wishlist } = store.getState();
  saveUserInfoToLocalStorage("cart", cart.userCart);
  saveUserInfoToLocalStorage("wishlist", wishlist.userWishlist);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
