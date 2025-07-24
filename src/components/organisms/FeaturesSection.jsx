import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/molecules/FeatureCard";
import ApperIcon from "@/components/ApperIcon";
import featuresService from "@/services/api/featuresService";

const FeaturesSection = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadFeatures();
  }, []);

  const loadFeatures = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await featuresService.getAll();
      setFeatures(data);
    } catch (err) {
      setError("Failed to load features");
      console.error("Features error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-48 h-8 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-12 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-[600px] h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={`feature-skeleton-${index}`} className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-xl mb-6"></div>
                <div className="w-32 h-6 bg-gray-200 rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-4/5 h-4 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 text-red-600 mb-4">
              <ApperIcon name="AlertCircle" className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Features Unavailable</h2>
            </div>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={loadFeatures}
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              <ApperIcon name="RefreshCw" className="w-5 h-5 mr-2" />
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (features.length === 0) {
    return (
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 text-gray-400 mb-4">
              <ApperIcon name="Package" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Features Available</h2>
            <p className="text-gray-600 mb-6">Features information is currently unavailable. Please check back later.</p>
            <button
              onClick={loadFeatures}
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              <ApperIcon name="RefreshCw" className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
<section id="features" className="py-12 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-50 to-orange-50 rounded-full opacity-60 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-50 to-primary-50 rounded-full opacity-50 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full text-white text-sm font-medium mb-6"
          >
            <ApperIcon name="Star" className="w-4 h-4 mr-2" />
            Advanced Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
          >
            Engineered for{" "}
            <span className="gradient-text">Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Atlas combines cutting-edge artificial intelligence with industrial-grade hardware to deliver 
            unmatched performance across diverse manufacturing and automation applications.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.Id} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-gray-200">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm lg:text-base">
              Discover how Atlas can revolutionize your industrial processes with precision, 
              safety, and unprecedented efficiency.
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group min-h-[44px]"
            >
              Schedule Consultation
              <ApperIcon name="Calendar" className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;