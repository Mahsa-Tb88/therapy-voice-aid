import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import DashboardPreview from "@/components/DashboardPreview";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <DashboardPreview />
        <BenefitsSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
