"use client";
import ImgSVG from "@/components/styled-component/ImgSVG";
import { svgs } from "@/components/util/SVGImages";
import { MAX_PRODUCT_RATING } from "@/lib/consts";
import { formatPrice } from "@/lib/format";
import { Dictionary } from "@/types/lang";
import { Product } from "@/types/product";
import { Box, Divider, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ProductImgSlider from "./ProductImgSlider";

const ProductAction = dynamic(() => import("./ProductAction"), { ssr: false });

interface ProductInfoProps {
  product: Product;
  productLang: Dictionary["product"];
}
export default function ProductInfo({
  product,
  productLang,
}: ProductInfoProps) {
  const [currIndex, setCurrIndex] = useState(0);
  const getIndex = (i: number) => {
    if (i < 0) {
      return product.images.length - 1;
    } else if (i >= product.images.length) {
      return 0;
    } else {
      return i;
    }
  };
  const handleImgClick = (i: number) => {
    setCurrIndex(getIndex(i));
  };
  useEffect(() => {
    setCurrIndex(0);
  }, [product]);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="stretch"
      sx={{ padding: { xs: "48px 0" }, paddingBottom: "48px", gap: "30px" }}
    >
      <ProductImgSlider
        product={product}
        currIndex={currIndex}
        handleImgClick={handleImgClick}
      />
      <Stack
        direction="column"
        alignItems="flex-start"
        sx={{
          width: { xs: "100%", md: "50%" },
          padding: "11px 22px 0 24px",
        }}
      >
        <Typography variant="h4">{product.title}</Typography>
        <Stack
          alignItems={{ xs: "flex-start", sm: "center" }}
          direction={{ xs: "column", sm: "row" }}
          sx={{ marginTop: "12px", gap: "10px" }}
        >
          <StarReview rating={product.rating} />
          <Typography variant="h6">{`10 ${productLang.reviews}`}</Typography>
        </Stack>
        <Box sx={{ marginTop: "22px" }}>
          <Typography variant="h3">{formatPrice(product.price)}</Typography>
          <Stack sx={{ marginTop: "5px", gap: "5px" }}>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              {`${productLang.availability} :`}
            </Typography>
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              {product.stock > 0 ? productLang.inStock : productLang.outOfStock}
            </Typography>
          </Stack>
        </Box>
        <Typography
          variant="body2"
          sx={{ marginTop: "61px", color: "text.grayText1" }}
        >
          {product.description}
        </Typography>
        <Divider
          variant="middle"
          sx={{
            width: "100%",
            margin: "27px 0 29px 0",
            backgroundColor: "text.muted",
          }}
        />
        <ProductAction productLang={productLang} product={product} />
      </Stack>
    </Stack>
  );
}
interface StarReviewProps {
  rating: number;
}
function StarReview({ rating }: StarReviewProps) {
  const floorRating = Math.floor(rating);
  const wholeStarCnt =
    floorRating > MAX_PRODUCT_RATING ? MAX_PRODUCT_RATING : floorRating;
  const hollowStarCnt = MAX_PRODUCT_RATING - wholeStarCnt;

  return (
    <Stack sx={{ gap: "5px" }}>
      {[...Array(wholeStarCnt)].map((_, i) => (
        <ImgSVG
          key={`whole-star-${i}`}
          svg={svgs.bxsStar}
          sx={{ height: 22, width: 22 }}
        />
      ))}
      {[...Array(hollowStarCnt)].map((_, i) => (
        <ImgSVG
          key={`hollow-star-${i}`}
          svg={svgs.bxStar}
          sx={{ height: 22, width: 22, fill: "red" }}
        />
      ))}
    </Stack>
  );
}
