"use client";
import { computeDiscountedPrice, formatPrice } from "@/lib/format";
import { Product } from "@/types/product";
import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CardDescContainer from "../styled-component/containers/CardDescContainer";

interface ProductCardProps {
  product: Product;
  sx?: SxProps<Theme>;
  descSx?: SxProps<Theme>;
}
export default function ProductCard({ product, sx, descSx }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Stack
        direction="column"
        sx={[
          {
            cursor: "pointer",
            backgroundColor: "text.light",
            "&:hover :where(h5, p)": { color: "primary.main" },
            "& :where(img)": {
              height: "auto",
              width: "100%",
              transition: "transform 0.2s",
            },
            "&:hover :where(img)": {
              transform: "scale(1.1)",
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Box sx={{ display: "inline-block", overflow: "hidden" }}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            height={458}
            width={458}
          />
        </Box>
        <CardDescContainer
          sx={[
            {
              textAlign: "center",
            },
            ...(Array.isArray(descSx) ? descSx : [descSx]),
          ]}
        >
          <Typography variant="h5">{product.title}</Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: 700 }}
          >
            {product.description}
          </Typography>
          <Stack
            sx={{ gap: "5px" }}
            direction={{ xs: "row", sm: "column", md: "row" }}
          >
            <Typography variant="h5" sx={{ color: "text.muted" }}>
              {formatPrice(product.price)}
            </Typography>
            <Typography variant="h5" sx={{ color: "secondary.main" }}>
              {computeDiscountedPrice(
                product.price,
                product.discountPercentage
              )}
            </Typography>
          </Stack>
        </CardDescContainer>
      </Stack>
    </Link>
  );
}
