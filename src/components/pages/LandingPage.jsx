import React from "react";
import Navigation from "@/components/organisms/Navigation";
import HeroSection from "@/components/organisms/HeroSection";
import HumanoidShowcase from "@/components/organisms/HumanoidShowcase";
import AboutSection from "@/components/organisms/AboutSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
<main>
        <HeroSection />
        <HumanoidShowcase />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;