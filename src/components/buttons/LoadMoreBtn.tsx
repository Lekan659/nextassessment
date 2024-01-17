"use client";
import { ReactNode } from "react";
import CustomBtn from "../styled-component/custom/CustomBtn";
import LoadingView from "../util/LoadingView";

interface LoadMoreBtnProps {
  onClick: () => void;
  isLoading: boolean;
  children: ReactNode;
}
export default function LoadMoreBtn({
  onClick,
  isLoading,
  children,
}: LoadMoreBtnProps) {
  return (
    <CustomBtn
      onClick={() => onClick?.()}
      type="button"
      variant="outlined"
      size="medium"
      disabled={isLoading}
      sx={{
        width: "fit-content",
        padding: "15px 40px",
        minWidth: "230px",
      }}
    >
      {isLoading ? <LoadingView /> : <>{children}</>}
    </CustomBtn>
  );
}
