import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Fleet from "../components/sections/Fleet";
import QuoteCalculator from "../components/sections/QuoteCalculator";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import Partners from "../components/sections/Partners";
import FAQ from "../components/sections/FAQ";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import LiveTrackingPreview from "../components/sections/LiveTrackingPreview";
import CTASection from "../components/sections/CTASection";
import VideoShowcase from "../components/sections/VideoShowcase";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Fleet />
      <VideoShowcase />
      <QuoteCalculator />
      <LiveTrackingPreview />
      <Testimonials />
      <Partners />
      <FAQ />
      <CTASection />
    </motion.div>
  );
};

export default Home;
