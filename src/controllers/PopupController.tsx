"use client";
import { useAppSelector } from "@/providers/redux/hooks";
import { Dictionary } from "@/types/lang";
import dynamic from "next/dynamic";
const CartPopup = dynamic(() => import("@/components/popups/CartPopup"), {
  ssr: false,
});
const WishlistPopup = dynamic(
  () => import("@/components/popups/WishlistPopup"),
  {
    ssr: false,
  }
);
interface PopupControllerProps {
  popupLang: Dictionary["popups"];
  msgsLang: Dictionary["msgs"];
}
export default function PopupController({
  popupLang,
  msgsLang,
}: PopupControllerProps) {
  const popupName = useAppSelector((state) => state.popup.ctrl.popupName);
  const show = useAppSelector((state) => state.popup.ctrl.show);
  return (
    <>
      <CartPopup
        show={popupName === "cart" && show}
        cartLang={popupLang.cart}
        msgsLang={msgsLang}
      />
      <WishlistPopup
        show={popupName === "wishlist" && show}
        wishlistLang={popupLang.wishlist}
        msgsLang={msgsLang}
      />
    </>
  );
}
