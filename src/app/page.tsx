import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AppPreview from "./components/home/AppPreview";
import FeatureSection from "./components/home/FeatureSection";
import ParticlesBackground from "./components/home/ParticlesBackground";

const Home = () => {
  return (
    <main className="flex flex-col relative">
      <Navbar />
      <HeroSection />
      <div
        className="2xl-2:relative absolute flex flex-col w-full items-center 2xl-2:mt-[100vh] mt-0 z-20
        2xl-2:top-auto 2xl:top-160 xl:top-145 lg:top-130 md:top-123 sm:top-96 top-86"
      >
        <AppPreview />
        <div className="flex flex-col w-full items-center bg-primary">
          <ParticlesBackground />
          <FeatureSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
