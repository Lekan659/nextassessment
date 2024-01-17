import LogoWithLinkSection from "@/components/navigation/LogoWithLinkSection";
import { getDictionary } from "@/lib/dictonaries";
import { PageWithLangParamsProps } from "@/types/lang";
import HomeNavbar from "./(components)/HomeNavbar";
import BestServicesSection from "./(sections)/BestServicesSection";
import BetterExpSection from "./(sections)/BetterExpSection";
import FeaturedPostSection from "./(sections)/FeaturedPostSection";
import FeaturedSection from "./(sections)/FeaturedSection";
import TestimonialsSection from "./(sections)/TestimonialsSection";
import TopSection from "./(sections)/TopSection";
export default async function HomePage({
  params: { lang },
}: PageWithLangParamsProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <HomeNavbar navLang={dictionary.home.navbar} />
      <TopSection  />
      <FeaturedSection
        featuredLang={dictionary.home.featured}
        productLang={dictionary.product}
      />
      <BestServicesSection servicesLang={dictionary.home.services} />
      <FeaturedPostSection
        featuredPostLang={dictionary.home.featuredPosts}
        postLang={dictionary.posts}
      />
      <TestimonialsSection testimonialsLang={dictionary.home.testimonials} />
      <BetterExpSection betterExpLang={dictionary.home.betterExp} />
      <LogoWithLinkSection />
    </>
  );
}
