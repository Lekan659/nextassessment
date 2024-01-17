import LogoWithLinkSection from "@/components/navigation/LogoWithLinkSection";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictonaries";
import { getPaginateProducts, getProductById } from "@/lib/productLib";
import { Product } from "@/types/product";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductNavbar from "../(components)/ProductNavbar";
import BestSellerProductsSection from "../(sections)/BestSellerProductsSection";
import ClientsSection from "../(sections)/ClientsSection";
import DetailsSection from "../(sections)/DetailsSection";
import OtherInfoSection from "../(sections)/OtherInfoSection";

interface ProductDetailsPageProps {
  params: { lang: Locale; id: number };
}

async function getProduct(id: number) {
  const product: Product | null = await getProductById(id);
  if (!product) {
    notFound();
  }
  return product;
}

export async function generateMetadata({
  params: { id },
}: ProductDetailsPageProps): Promise<Metadata> {
  const product = await getProduct(id);
  return {
    title: product.title,
  };
}

export default async function ProductDetailPage({
  params: { lang, id },
}: ProductDetailsPageProps) {
  const dictionary = await getDictionary(lang);
  const product = await getProduct(id);
  const { products: bestsellerProducts } = await getPaginateProducts();
  return (
    <>
      <ProductNavbar dictionary={dictionary} />
      <DetailsSection
        product={product}
        navigationLang={dictionary.navbarLight}
        productLang={dictionary.product}
      />
      <OtherInfoSection otherInfoLang={dictionary.product.otherInfo} />
      <BestSellerProductsSection
        productLang={dictionary.product}
        products={bestsellerProducts}
      />
      <ClientsSection />
      <LogoWithLinkSection bgColor="text.light" />
    </>
  );
}
