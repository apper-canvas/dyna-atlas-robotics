import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import ApperIcon from "@/components/ApperIcon";
import testimonialsService from "@/services/api/testimonialsService";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await testimonialsService.getAll();
      setTestimonials(data);
    } catch (err) {
      setError("Failed to load testimonials");
      console.error("Testimonials error:", err);
    } finally {
      setLoading(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-48 h-8 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-12 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-[600px] h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, index) => (
              <div key={`testimonial-skeleton-${index}`} className="bg-white rounded-xl border border-gray-200 p-8 animate-pulse">
                <div className="w-8 h-8 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-3 mb-6">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-4/5 h-4 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
                  <div className="space-y-2">
                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="w-32 h-3 bg-gray-200 rounded"></div>
                    <div className="w-28 h-3 bg-gray-200 rounded"></div>
                  </div>
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
      <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 text-red-600 mb-4">
              <ApperIcon name="AlertCircle" className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Testimonials Unavailable</h2>
            </div>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={loadTestimonials}
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

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 text-gray-400 mb-4">
              <ApperIcon name="MessageSquare" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Testimonials Available</h2>
            <p className="text-gray-600 mb-6">Customer testimonials are currently unavailable. Please check back later.</p>
            <button
              onClick={loadTestimonials}
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
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-orange-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-blue-100 to-primary-100 rounded-full opacity-25 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full text-white text-sm font-medium mb-6"
          >
            <ApperIcon name="MessageSquare" className="w-4 h-4 mr-2" />
            Client Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
          >
            Trusted by Industry{" "}
            <span className="gradient-text">Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            See how Atlas has transformed operations for leading manufacturers across automotive, 
            aerospace, and electronics industries worldwide.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden lg:block">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 z-10"
            >
              <ApperIcon name="ChevronLeft" className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 z-10"
            >
              <ApperIcon name="ChevronRight" className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.Id}-${currentIndex}`} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
            {/* Handle wrapping for the second card */}
            {currentIndex === testimonials.length - 1 && testimonials.length > 1 && (
              <TestimonialCard 
                key={`${testimonials[0].Id}-wrap`} 
                testimonial={testimonials[0]} 
                index={1} 
              />
            )}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <p className="text-center text-gray-600 mb-8 font-medium">
            Trusted by leading manufacturers worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
            {testimonials.map((testimonial, index) => (
              <div key={`logo-${testimonial.Id}`} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-2">
                  <ApperIcon name="Building2" className="w-8 h-8 text-gray-500" />
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;