import React from "react";
import Navigation from "@/components/organisms/Navigation";
import HeroSection from "@/components/organisms/HeroSection";
import HumanoidShowcase from "@/components/organisms/HumanoidShowcase";
import AboutSection from "@/components/organisms/AboutSection";
import MadeByHumansSection from "@/components/organisms/MadeByHumansSection";
import DetailsSection from "@/components/organisms/DetailsSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";
import ImageShowcase from "@/components/organisms/ImageShowcase";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
<main>
        <HeroSection />
        <HumanoidShowcase />
        <ImageShowcase />
        <AboutSection />
        <MadeByHumansSection />
        <DetailsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;