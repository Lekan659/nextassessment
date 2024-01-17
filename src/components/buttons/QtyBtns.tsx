"use client";

import { Stack, SxProps, Theme } from "@mui/material";
import { svgs } from "../util/SVGImages";
import IconBtn from "./IconBtn";

interface QtyBtnsProps {
  qty: number;
  changeItemQty: (num: number) => void;
  sx?: SxProps<Theme>;
}
export default function QtyBtns({ qty, changeItemQty, sx }: QtyBtnsProps) {
  return (
    <Stack
      sx={[
        {
          gap: "4px",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <IconBtn
        label={"minus quantity"}
        icon={svgs.minus}
        height={20}
        width={20}
        onClick={() => changeItemQty(-1)}
        sx={{ padding: "4px" }}
      />
      {qty}
      <IconBtn
        label={"plus quantity"}
        icon={svgs.plus}
        height={20}
        width={20}
        onClick={() => changeItemQty(1)}
        sx={{ padding: "4px" }}
      />
    </Stack>
  );
}
