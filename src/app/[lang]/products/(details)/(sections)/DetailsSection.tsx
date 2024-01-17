import BreadCrumbs from "@/components/navigation/BreadCrumbs";
import SectionContainer from "@/components/styled-component/containers/SectionContainer";
import CustomNextLink from "@/components/styled-component/custom/CustomNextLink";
import { Dictionary } from "@/types/lang";
import { Product } from "@/types/product";
import { Divider, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const ProductInfo = dynamic(() => import("../(components)/ProductInfo"), {
  ssr: false,
});

interface DetailsSectionProps {
  product: Product;
  navigationLang: Dictionary["navbarLight"];
  productLang: Dictionary["product"];
}
export default function DetailsSection({
  product,
  navigationLang,
  productLang,
}: DetailsSectionProps) {
  return (
    <>
      <SectionContainer
        sx={{
          backgroundColor: "background.lightGray",
          padding: {
            xs: "0 33px",
            lg: "0 195px",
          },
        }}
      >
        <BreadCrumbs
          paths={[navigationLang.links[0], navigationLang.links[1]]}
        />
        <ProductInfo
          key={product.id}
          product={product}
          productLang={productLang}
        />
      </SectionContainer>
      <SectionContainer
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: { xs: "flex-start", md: "center" },
          backgroundColor: "text.light",
          overflowX: { xs: "scroll", md: "hidden" },
          padding: {
            xs: "10px 33px",
            lg: "10px 195px",
          },
        }}
      >
        <Stack>
          <CustomNextLink
            href={"#"}
            sx={{
              padding: "24px",
              "&:hover :where(span)": { color: "primary.main" },
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontWeight: 600 }}
            >
              {productLang.description}
            </Typography>
          </CustomNextLink>

          <CustomNextLink
            href={"#"}
            sx={{
              padding: "24px",
              "&:hover :where(span)": { color: "primary.main" },
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontWeight: 700 }}
            >
              {productLang.additionalInfo}
            </Typography>
          </CustomNextLink>

          <CustomNextLink
            href={"#"}
            sx={{
              color: "text.secondary",
              padding: "24px",
              "&:hover :where(span)": { color: "primary.main" },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
              }}
            >
              {productLang.reviews}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "secondary.main", fontWeight: 700 }}
            >
              {"(0)"}
            </Typography>
          </CustomNextLink>
        </Stack>

        <Divider
          variant="middle"
          sx={{
            width: "100%",
            backgroundColor: "background.gray4",
          }}
        />
      </SectionContainer>
    </>
  );
}
