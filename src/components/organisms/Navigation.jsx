import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/molecules/Logo";
import NavigationLink from "@/components/molecules/NavigationLink";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import navigationService from "@/services/api/navigationService";

const Navigation = () => {
  const [navigation, setNavigation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    loadNavigation();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadNavigation = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await navigationService.getAll();
      setNavigation(data);
    } catch (err) {
      setError("Failed to load navigation");
      console.error("Navigation error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleNavClick = async (href) => {
    // Find the corresponding navigation item
    const navItem = navigation.find(item => item.href === href);
    if (navItem) {
      try {
        await navigationService.setActiveItem(navItem.Id);
        const updatedNav = await navigationService.getAll();
        setNavigation(updatedNav);
      } catch (err) {
        console.error("Failed to update active navigation:", err);
      }
    }
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
  };

  const handleDemoClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {[...Array(5)].map((_, index) => (
                <div key={`nav-${index}`} className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </nav>
    );
  }

  if (error) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center space-x-2 text-red-600">
              <ApperIcon name="AlertCircle" className="w-5 h-5" />
              <span className="text-sm">Navigation unavailable</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200" 
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavigationLink
                key={item.Id}
                href={item.href}
                label={item.label}
                isActive={item.isActive}
                onClick={handleNavClick}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={handleDemoClick} size="sm">
              Get Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
          >
            <ApperIcon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              className="w-6 h-6" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <NavigationLink
                  key={item.Id}
                  href={item.href}
                  label={item.label}
                  isActive={item.isActive}
                  onClick={handleNavClick}
                  className="block w-full text-left"
                />
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  onClick={handleDemoClick} 
                  size="sm" 
                  className="w-full"
                >
                  Get Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;