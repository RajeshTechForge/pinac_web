import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PrivacySection from "../components/PrivacySection";
import OpenSourceSection from "../components/OpenSourceSection";
import TechStackSection from "../components/TechStackSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-violet-500/30 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PrivacySection />
      <OpenSourceSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </main>
  );
}
