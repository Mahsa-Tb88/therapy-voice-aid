import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardPreview from "@/components/DashboardPreview";
import BenefitsSection from "@/components/BenefitsSection";
import TechnologySection from "@/components/TechnologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardPreview />
        <BenefitsSection />
        <TechnologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
