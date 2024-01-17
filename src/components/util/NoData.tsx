"use client";

import { ReactNode } from "react";
import NoDataContainer from "../styled-component/containers/NoDataContainer";

interface NoDataProps {
  children: ReactNode;
}
export default function NoData({ children }: NoDataProps) {
  return <NoDataContainer>{children}</NoDataContainer>;
}
