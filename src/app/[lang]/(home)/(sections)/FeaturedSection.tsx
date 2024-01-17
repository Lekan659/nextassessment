import SectionContainer from "@/components/styled-component/containers/SectionContainer";
import { Dictionary } from "@/types/lang";
import FeaturedProducts from "../(components)/FeaturedProducts";
import SectionHeader from "../(components)/SectionHeader";

interface FeaturedSectionProps {
  productLang: Dictionary["product"];
  featuredLang: Dictionary["home"]["featured"];
}
export default async function FeaturedSection({
  productLang,
  featuredLang,
}: FeaturedSectionProps) {
  return (
    <SectionContainer>
      <SectionHeader
        subtitle={featuredLang.featuredProducts}
        title={featuredLang.bestsellerProducts}
        desc={featuredLang.problemsResolve}
      />
      <FeaturedProducts productLang={productLang} />
    </SectionContainer>
  );
}
