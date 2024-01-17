import { UserCart } from "@/types/userCart";
import { UserWishlist } from "@/types/userWishlist";
import { getCart } from "./cart";

export function checkIfLocalStorageEnabled() {
  const mod = "test-storage";
  try {
    localStorage.setItem(mod, mod);
    localStorage.removeItem(mod);
    return true;
  } catch (e) {
    return false;
  }
}

export function saveUserInfoToLocalStorage(
  key: string,
  value: UserCart | UserWishlist
): UserCart | undefined {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return getCart();
  } catch (error) {
    return;
  }
}
