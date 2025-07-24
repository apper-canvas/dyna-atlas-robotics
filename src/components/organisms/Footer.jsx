import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/molecules/Logo";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  const resources = [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Technical Specs", href: "#" },
    { label: "Support", href: "#" },
    { label: "Training", href: "#" }
  ];

  const company = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "News", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Investors", href: "#" }
  ];
const socialLinks = [
    { icon: "Linkedin", href: "https://linkedin.com/company/atlas-robotics", label: "LinkedIn" },
    { icon: "Twitter", href: "https://twitter.com/atlas_robotics", label: "Twitter" },
    { icon: "Youtube", href: "https://youtube.com/@atlasrobotics", label: "YouTube" },
    { icon: "Github", href: "https://github.com/atlas-robotics", label: "GitHub" },
    { icon: "Instagram", href: "https://instagram.com/atlas_robotics", label: "Instagram" }
  ];

  const contactInfo = [
    { icon: "Phone", text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: "Mail", text: "info@atlasrobotics.com", href: "mailto:info@atlasrobotics.com" },
    { icon: "MapPin", text: "San Francisco, CA", href: "#" }
  ];

  const offices = [
    { city: "San Francisco", address: "123 Innovation Drive, Suite 400", country: "USA" },
    { city: "Tokyo", address: "5-10-1 Shibuya, Shibuya City", country: "Japan" },
    { city: "Berlin", address: "Unter den Linden 77", country: "Germany" }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-lg">
                    <ApperIcon name="Bot" className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">Atlas</span>
                    <span className="text-xs text-gray-400 -mt-1">Robotics</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading the robotics revolution with cutting-edge humanoid technology that transforms 
                industrial operations through unmatched precision, intelligence, and reliability.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    onClick={() => handleLinkClick(social.href)}
                    className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <ApperIcon name={social.icon} className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Navigation Sitemap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources & Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                {resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company & About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                {company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Locations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
              
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 text-primary-400 flex-shrink-0">
                      <ApperIcon name={contact.icon} className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => handleLinkClick(contact.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {contact.text}
                    </button>
                  </div>
                ))}
              </div>

              {/* Office Locations */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Global Offices</h4>
                <div className="space-y-3">
                  {offices.map((office, index) => (
                    <div key={index} className="text-sm">
                      <div className="text-gray-300 font-medium">{office.city}, {office.country}</div>
                      <div className="text-gray-400 text-xs">{office.address}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-700"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Stay Updated on Atlas Developments
                </h3>
                <p className="text-gray-300">
                  Get the latest news on robotics innovations, case studies, and product updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ApperIcon name="ArrowRight" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
<div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
              {/* Copyright and Company Info */}
              <div className="flex flex-col space-y-2">
                <div className="text-gray-400 text-sm">
                  © 2024 Atlas Robotics Inc. All rights reserved.
                </div>
                <div className="text-gray-500 text-xs">
                  Revolutionizing industry through advanced robotics technology.
                </div>
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-sm">
                <div className="flex flex-wrap gap-3 sm:gap-6">
                  <a 
                    href="/privacy-policy" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 min-h-[44px] flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  <a 
                    href="/terms-of-service" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 min-h-[44px] flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                  <a 
                    href="/cookie-policy" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 min-h-[44px] flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Policy
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-6">
                  <a 
                    href="/accessibility" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 min-h-[44px] flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Accessibility
                  </a>
                  <a 
                    href="/security" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 min-h-[44px] flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Security
                  </a>
                  <a 
                    href="/legal" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 min-h-[44px] flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Legal Notice
                  </a>
                </div>
              </div>
            </div>
            
            {/* Additional Footer Info */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
                <div>
                  Atlas Robotics is a registered trademark. Patent pending technology.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                  <span>🏆 Industry Leader 2024</span>
                  <span>🌍 Carbon Neutral Certified</span>
                  <span>🔒 ISO 27001 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;