import { checkIfLocalStorageEnabled } from "@/lib/storage";
import { useEffect, useState } from "react";

export function useCheckLocalStorage(show: boolean) {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    if (!checkIfLocalStorageEnabled() && show) {
      setEnabled(false);
    }
  }, [show]);
  return {
    enabled,
  };
}
