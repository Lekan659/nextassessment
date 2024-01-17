import { useEffect } from "react";

export function useScrollable(scrollable: boolean) {
  useEffect(() => {
    if (typeof scrollable !== "undefined") {
      if (scrollable) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "visible";
      }
    }

    return () => {
      document.documentElement.style.overflow = "visible";
    };
  }, [scrollable]);
}
