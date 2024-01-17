"use client";
import LoadMoreBtn from "@/components/buttons/LoadMoreBtn";
import ProductList from "@/components/products/ProductList";
import { PRODUCT_PAGE_SIZE } from "@/lib/consts";
import { getPaginateProducts } from "@/lib/productLib";
import { Dictionary } from "@/types/lang";
import { Product } from "@/types/product";
import { Stack } from "@mui/material";
import { useEffect, useState, useTransition } from "react";

interface FeaturedProductsProps {
  productLang: Dictionary["product"];
}

export default function FeaturedProducts({
  productLang,
}: FeaturedProductsProps) {
  const [isPending, startTransition] = useTransition();
  const [paginateProducts, setPaginateProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    startTransition(async () => {
      const { total: productTotal, products } = await getPaginateProducts(
        PRODUCT_PAGE_SIZE,
        page * PRODUCT_PAGE_SIZE
      );
      setTotal(productTotal);
      setPaginateProducts((prev) => [...prev, ...products]);
    });
  }, [page]);
  return (
    <Stack direction="column" alignItems="center">
      <ProductList products={paginateProducts} productLang={productLang} />
      {paginateProducts.length >= total ? null : (
        <LoadMoreBtn
          onClick={() => setPage((prev) => prev + 1)}
          isLoading={isPending}
        >
          {productLang.loadProducts}
        </LoadMoreBtn>
      )}
    </Stack>
  );
}
