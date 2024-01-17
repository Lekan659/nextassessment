import { Dictionary } from "@/types/lang";
import { Product } from "@/types/product";
import { Stack, SxProps, Theme } from "@mui/material";
import ProductGrid from "../styled-component/grids/ProductGrid";
import NoData from "../util/NoData";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  productLang: Dictionary["product"];
  gridSx?: SxProps<Theme>;
  descSx?: SxProps<Theme>;
}

export default function ProductList({
  products,
  productLang,
  gridSx,
  descSx,
}: ProductListProps) {
  return (
    <>
      {products.length > 0 ? (
        <Stack direction="column">
          <ProductGrid sx={gridSx}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} descSx={descSx} />
            ))}
          </ProductGrid>
        </Stack>
      ) : (
        <NoData>{productLang.noData}</NoData>
      )}
    </>
  );
}
