import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";

const HumanoidShowcase = () => {
  const capabilities = [
    {
      icon: "Settings",
      title: "Advanced Manipulation",
      description: "Precise handling of complex objects with human-like dexterity and 15+ degrees of freedom per arm."
    },
    {
      icon: "Eye",
      title: "Computer Vision",
      description: "Real-time object recognition and spatial awareness using advanced AI-powered vision systems."
    },
    {
      icon: "Brain",
      title: "AI Decision Making",
      description: "Autonomous problem-solving with machine learning algorithms that adapt to new scenarios."
    },
    {
      icon: "Shield",
      title: "Safety Systems",
      description: "Comprehensive safety protocols with collision detection and emergency shutdown capabilities."
    },
    {
      icon: "Wifi",
      title: "Connectivity",
      description: "Seamless integration with existing systems via industrial IoT and cloud-based monitoring."
    },
    {
      icon: "Battery",
      title: "Extended Operation",
      description: "8+ hour battery life with hot-swappable power systems for continuous 24/7 operation."
    }
  ];

  const specifications = [
    { label: "Height", value: "1.8m" },
    { label: "Weight", value: "89kg" },
    { label: "Payload", value: "25kg" },
    { label: "Reach", value: "1.2m" },
    { label: "Speed", value: "1.5m/s" },
    { label: "Operating Temp", value: "-10°C to 50°C" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
<section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-orange-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <ApperIcon name="Bot" className="w-4 h-4 mr-2" />
            Humanoid Showcase
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="gradient-text">Atlas Robot</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of humanoid robotics designed for industrial excellence. 
            Atlas combines human-like agility with machine precision to revolutionize your operations.
          </p>
        </motion.div>

<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Robot Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-md">
              {/* Main Robot Display */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl lg:rounded-3xl shadow-2xl relative overflow-hidden border border-gray-600">
                {/* Robot Silhouette */}
                <div className="absolute inset-6 lg:inset-8 border-2 border-primary-400/60 rounded-xl lg:rounded-2xl">
                  {/* Head */}
                  <div className="absolute top-3 lg:top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg shadow-lg"></div>
                  
                  {/* Body */}
                  <div className="absolute top-16 lg:top-20 left-1/2 transform -translate-x-1/2 w-14 h-20 lg:w-16 lg:h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg border border-primary-400/40"></div>
                  
                  {/* Arms */}
                  <div className="absolute top-20 lg:top-24 left-5 lg:left-6 w-3 h-14 lg:h-16 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
                  <div className="absolute top-20 lg:top-24 right-5 lg:right-6 w-3 h-14 lg:h-16 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
                  
                  {/* Legs */}
                  <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-3 lg:-translate-x-4 w-3 lg:w-4 h-16 lg:h-20 bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg"></div>
                  <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 translate-x-3 lg:translate-x-4 w-3 lg:w-4 h-16 lg:h-20 bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg"></div>
                </div>

                {/* Status Indicators */}
                <div className="absolute top-3 lg:top-4 right-3 lg:right-4 flex flex-col space-y-1 lg:space-y-2">
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full shadow-lg"
                  ></motion.div>
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-400 rounded-full shadow-lg"
                  ></motion.div>
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="w-2 h-2 lg:w-3 lg:h-3 bg-primary-400 rounded-full shadow-lg"
                  ></motion.div>
                </div>

                {/* Scanning Lines */}
                <motion.div
                  animate={{ y: [-100, 300] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-60"
                ></motion.div>
              </div>

              {/* Floating Tech Elements - Hidden on mobile */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-6 lg:-top-6 lg:-right-8 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-500 to-orange-500 rounded-xl lg:rounded-2xl shadow-xl items-center justify-center hidden sm:flex"
              >
                <ApperIcon name="Cpu" className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-3 -left-6 lg:-bottom-4 lg:-left-8 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-primary-500 rounded-lg lg:rounded-xl shadow-xl items-center justify-center hidden sm:flex"
              >
                <ApperIcon name="Zap" className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
            <Card className="mb-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 lg:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  {specifications.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-600 text-sm font-medium">{spec.label}</span>
                      <span className="text-gray-900 font-bold text-sm lg:text-base">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button className="flex-1 group text-sm lg:text-base">
                View Full Specs
                <ApperIcon name="ExternalLink" className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="secondary" className="flex-1 group text-sm lg:text-base">
                Download Datasheet
                <ApperIcon name="Download" className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Key Capabilities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h3>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features that make Atlas the perfect choice for modern industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((capability, index) => (
              <motion.div key={capability.title} variants={itemVariants}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ApperIcon name={capability.icon} className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HumanoidShowcase;