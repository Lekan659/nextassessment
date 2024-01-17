"use client";
import ProductList from "@/components/products/ProductList";
import SectionContainer from "@/components/styled-component/containers/SectionContainer";
import { Dictionary } from "@/types/lang";
import { Product } from "@/types/product";
import { Divider, Typography } from "@mui/material";

interface BestSellerProductsSectionProps {
  productLang: Dictionary["product"];
  products: Product[];
}
export default function BestSellerProductsSection({
  productLang,
  products,
}: BestSellerProductsSectionProps) {
  return (
    <SectionContainer
      sx={{
        display: { xs: "none", md: "flex" },
        padding: { xs: "48px 42px", md: "48px 195px" },
        backgroundColor: "background.lightGray",
      }}
    >
      <Typography variant="h3" textTransform="uppercase">
        {productLang.bestsellerProducts}
      </Typography>
      <Divider
        variant="middle"
        sx={{
          width: "100%",
          margin: "24px 0 24px 0",
          backgroundColor: "background.gray4",
        }}
      />
      <ProductList
        products={products}
        productLang={productLang}
        descSx={{ textAlign: "left", alignItems: "flex-start" }}
        gridSx={{
          gridTemplateColumns: {
            md: "repeat(4, minmax(0, 1fr))",
          },
        }}
      />
    </SectionContainer>
  );
}
