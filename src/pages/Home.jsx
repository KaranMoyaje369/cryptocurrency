import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import PlayStoreSection from "../components/home/PlayStoreSection";
import Roadmap from "../components/home/Roadmap";
import TestimonalsSection from "../components/home/TestimonalsSection";
import WorkingSection from "../components/home/WorkingSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WorkingSection />
      <Roadmap />
      <PlayStoreSection />
      <TestimonalsSection />
      <ContactSection />
    </>
  );
};

export default Home;
