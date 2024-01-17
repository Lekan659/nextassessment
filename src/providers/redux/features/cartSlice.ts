import { getCart } from "@/lib/cart";
import { Product } from "@/types/product";
import { UserCart } from "@/types/userCart";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface CartState {
  userCart: UserCart;
}
const initialState: CartState = {
  userCart: getCart(),
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const cart = state.userCart;
      const item = action.payload;
      //check if item exists
      const currItemIndex = cart.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      //if item exists add qty
      //else add to cart and set qty to 1
      if (currItemIndex > -1) {
        cart.items[currItemIndex].quantity += 1;
      } else {
        const { id, title, thumbnail, price } = item;
        cart.items = [
          ...cart.items,
          { id, title, thumbnail, quantity: 1, price },
        ];
      }
      cartSlice.caseReducers.setCartTotal(state, {
        payload: cart,
        type: "setCartTotal",
      });
      cartSlice.caseReducers.setCartQty(state, {
        payload: cart,
        type: "setCartQty",
      });
    },
    addItemQtyToCart: (state, action: PayloadAction<number>) => {
      const cart = state.userCart;
      const id = action.payload;
      const currItemIndex = cart.items.findIndex(
        (cartItem) => cartItem.id === id
      );
      cart.items[currItemIndex].quantity += 1;
      cartSlice.caseReducers.setCartTotal(state, {
        payload: cart,
        type: "setCartTotal",
      });
      cartSlice.caseReducers.setCartQty(state, {
        payload: cart,
        type: "setCartQty",
      });
    },
    removeItemQtyToCart: (state, action: PayloadAction<number>) => {
      const cart = state.userCart;
      const id = action.payload;
      const currItemIndex = cart.items.findIndex(
        (cartItem) => cartItem.id === id
      );
      if (cart.items[currItemIndex].quantity - 1 <= 0) {
        cartSlice.caseReducers.removeItemFromCart(state, {
          payload: id,
          type: "removeItemFromCart",
        });
      } else {
        cart.items[currItemIndex].quantity -= 1;
      }
      cartSlice.caseReducers.setCartTotal(state, {
        payload: cart,
        type: "setCartTotal",
      });
      cartSlice.caseReducers.setCartQty(state, {
        payload: cart,
        type: "setCartQty",
      });
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const cart = state.userCart;
      const id = action.payload;
      const currItemIndex = cart.items.findIndex(
        (cartItem) => cartItem.id === id
      );
      cart.items.splice(currItemIndex, 1);
      cartSlice.caseReducers.setCartTotal(state, {
        payload: cart,
        type: "setCartTotal",
      });
      cartSlice.caseReducers.setCartQty(state, {
        payload: cart,
        type: "setCartQty",
      });
    },
    setCartTotal: (state, action: PayloadAction<UserCart>) => {
      const items = action.payload.items;
      const cartSum = items.reduce(
        (acc, val) => acc + val.price * val.quantity,
        0
      );
      state.userCart.total = cartSum;
    },
    setCartQty: (state, action: PayloadAction<UserCart>) => {
      const items = action.payload.items;
      const cartQty = items.reduce((acc, val) => acc + val.quantity, 0);
      state.userCart.quantity = cartQty;
    },
  },
});

export const {
  addProductToCart,
  addItemQtyToCart,
  removeItemQtyToCart,
  removeItemFromCart,
  setCartTotal,
  setCartQty,
} = cartSlice.actions;
export default cartSlice.reducer;
