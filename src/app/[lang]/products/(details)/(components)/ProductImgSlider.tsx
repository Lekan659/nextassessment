"use client";

import ImgSVG from "@/components/styled-component/ImgSVG";
import { svgs } from "@/components/util/SVGImages";
import { Product } from "@/types/product";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

interface ProductImgSliderProps {
  product: Product;
  currIndex: number;
  handleImgClick: (i: number) => void;
}
export default function ProductImgSlider({
  product,
  currIndex,
  handleImgClick,
}: ProductImgSliderProps) {
  return (
    <Stack
      direction="column"
      sx={{ width: { xs: "100%", md: "50%" }, gap: "21px" }}
    >
      <Box
        sx={{
          userSelect: "none",
          position: "relative",
          width: "100%",
          aspectRatio: {
            xs: "348/277",
            md: "506/450",
          },
        }}
      >
        {product?.images.length > 1 ? (
          <>
            {/* product image arrow slider */}
            <ImgSVG
              svg={svgs.chevronRight}
              sx={{
                position: "absolute",
                cursor: "pointer",
                height: "45px",
                width: "24px",
                zIndex: 1,
                bottom: "20%",
                right: "5%",
                "& :where(svg)": {
                  color: "text.light",
                },
                "&:hover :where(svg)": {
                  color: "primary.main",
                },
              }}
              onClick={() => handleImgClick(currIndex + 1)}
            />
            <ImgSVG
              svg={svgs.chevronLeft}
              sx={{
                position: "absolute",
                cursor: "pointer",
                height: "45px",
                width: "24px",
                zIndex: 1,
                bottom: "20%",
                left: "5%",
                "& :where(svg)": {
                  color: "text.light",
                },
                "&:hover :where(svg)": {
                  color: "primary.main",
                },
              }}
              onClick={() => handleImgClick(currIndex - 1)}
            />
          </>
        ) : null}
        <Image
          src={product.images[currIndex]}
          alt={`${product.title} - ${currIndex + 1}`}
          fill
          priority
          sizes="(max-width: 600px) 506px, 295px"
          draggable="false"
        />
      </Box>
      <Stack flexWrap="wrap" sx={{ gap: "19px", width: "100%" }}>
        {product.images.map((img, i) => (
          <Box
            onClick={() => handleImgClick?.(i)}
            key={`${product.title} - ${i}`}
            sx={{
              cursor: "pointer",
              "&:hover :where(img)": { filter: "brightness(50%)" },
              "& :where(img)": {
                filter: i === currIndex ? "brightness(50%)" : "initial",
              },
            }}
          >
            <Image
              src={img}
              alt={`${product.title} - ${i}`}
              height={75}
              width={100}
              priority
            />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
