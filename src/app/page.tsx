import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturedSection";
import StepsSection from "@/components/StepsSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import DownloadSection from "@/components/DownloadSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <ReviewsSection />
        <PricingSection />
        <BlogSection />
        <DownloadSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
