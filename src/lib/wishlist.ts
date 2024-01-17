import { UserWishlist } from "@/types/userWishlist";
import { checkIfLocalStorageEnabled } from "./storage";

export function getWishlist(): UserWishlist {
  if (!checkIfLocalStorageEnabled()) {
    return {
      items: [],
    };
  }
  return JSON.parse(localStorage.getItem("wishlist") || '{"items":[]}');
}
