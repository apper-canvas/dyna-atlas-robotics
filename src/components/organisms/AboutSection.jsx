import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const AboutSection = () => {
  const handleGetStarted = () => {
    const featuresSection = document.querySelector("#features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-orange-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-primary-100 to-blue-100 rounded-full opacity-25 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full text-white text-sm font-medium mb-6"
            >
              <ApperIcon name="Info" className="w-4 h-4 mr-2" />
              About Atlas Robotics
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
            >
              Redefining Industrial{" "}
              <span className="gradient-text">Automation</span>{" "}
              with Humanoid Intelligence
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-600 leading-relaxed"
            >
              <p>
                Atlas represents the pinnacle of humanoid robotics engineering, specifically designed 
                for the demanding requirements of modern industrial environments. Our advanced AI-driven 
                platform combines human-like dexterity with superhuman precision and endurance.
              </p>
              
              <p>
                Built on years of research in biomechanics, artificial intelligence, and industrial 
                automation, Atlas delivers unprecedented performance in manufacturing, assembly, 
                quality control, and material handling operations across diverse industry verticals.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6 mt-10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                  <ApperIcon name="TrendingUp" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">40% Efficiency Gain</h3>
                  <p className="text-gray-600 text-sm">Measurable productivity improvements across all deployment scenarios</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <ApperIcon name="Shield" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Zero Safety Incidents</h3>
                  <p className="text-gray-600 text-sm">Advanced safety protocols exceed industry standards</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <ApperIcon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Rapid Integration</h3>
                  <p className="text-gray-600 text-sm">Deploy and integrate within 48 hours using existing infrastructure</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <ApperIcon name="Brain" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Adaptive Learning</h3>
                  <p className="text-gray-600 text-sm">Continuous improvement through machine learning algorithms</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Button onClick={handleGetStarted} size="lg" className="group">
                Explore Features
                <ApperIcon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Technical Specifications Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 gradient-text">Technical Specifications</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text mb-2">1.8m</div>
                    <div className="text-gray-600 text-sm">Height</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text mb-2">85kg</div>
                    <div className="text-gray-600 text-sm">Weight</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text mb-2">25kg</div>
                    <div className="text-gray-600 text-sm">Payload</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text mb-2">8hrs</div>
                    <div className="text-gray-600 text-sm">Battery Life</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Key Capabilities</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Bi-manual manipulation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Dynamic balancing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Computer vision</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Real-time adaptation</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-primary-500 to-orange-500 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white"
              >
                <div className="text-2xl font-black">99.9%</div>
                <div className="text-xs opacity-90">Accuracy</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-primary-500 rounded-xl shadow-xl flex flex-col items-center justify-center text-white"
              >
                <div className="text-xl font-black">24/7</div>
                <div className="text-xs opacity-90">Uptime</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;