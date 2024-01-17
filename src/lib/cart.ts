import { UserCart } from "@/types/userCart";
import { checkIfLocalStorageEnabled } from "./storage";

export function getCart(): UserCart {
  if (!checkIfLocalStorageEnabled()) {
    return {
      items: [],
      quantity: 0,
      total: 0,
    };
  }
  return JSON.parse(localStorage.getItem("cart") || '{"items":[]}');
}
