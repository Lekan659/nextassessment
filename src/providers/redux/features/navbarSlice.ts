import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface NavbarState {
  show: boolean;
}
const initialState: NavbarState = {
  show: false,
};
export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean | null>) => {
      state.show = Boolean(action.payload?.toString())
        ? (action.payload as boolean)
        : !state.show;
    },
  },
});

export const { toggle } = navbarSlice.actions;
export const selectNavbarToggle = (state: RootState) => state.navbar.show;
export default navbarSlice.reducer;
