import { PopupControllerType } from "@/types/popup";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface PopupState {
  ctrl: PopupControllerType;
}
const initialState: PopupState = {
  ctrl: {
    show: false,
    popupName: null,
  },
};
export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<PopupControllerType>) => {
      state.ctrl.popupName = action.payload.popupName;
      state.ctrl.show = action.payload.show;
    },
  },
});

export const { set } = popupSlice.actions;
export const selectPopupSet = (state: RootState) => state.popup.ctrl;
export default popupSlice.reducer;
