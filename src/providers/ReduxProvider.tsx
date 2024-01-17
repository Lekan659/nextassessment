"use client";
import { ProviderProps } from "@/types/provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function ReduxProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
