import HeroSection from "@/components/HeroSection";
import TrendingProducts from "@/components/TrendingProducts";
import InfoBanner from "@/components/InfoBanner";
import AutoPartsCategories from "@/components/AutoPartsCategories";
import BrandsSection from "@/components/BrandsSection";
import SpecialOffers from "@/components/SpecialOffers";
import FeaturedArticles from "@/components/FeaturedArticles";
import HelpSection from "@/components/HelpSection";

export default function HomePage() {

  return (
    <div>
      <HeroSection />
      <AutoPartsCategories />
      <BrandsSection />
      <TrendingProducts />
      <InfoBanner />
      <SpecialOffers />
      <FeaturedArticles />
      <HelpSection />
    </div>
  );
}

