import { POPUPS } from "@/lib/consts";

export type PopupType = (typeof POPUPS)[number] | null;
export type PopupControllerType = {
  show: boolean;
  popupName?: PopupType;
};
