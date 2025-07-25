import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = () => {
  const handleLearnMore = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetDemo = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary-50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-orange-200 to-primary-200 rounded-full opacity-15 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
<motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.2,
              delayChildren: 0.1
            }}
            className="text-center lg:text-left"
          >
<motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                }
              }}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-orange-100 rounded-full text-primary-700 text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <ApperIcon name="Zap" className="w-4 h-4 mr-2" />
              </motion.div>
              Next-Generation Industrial Robotics
            </motion.div>

<motion.h1
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 1, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                Meet{" "}
              </motion.span>
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="gradient-text inline-block"
              >
                Atlas
              </motion.span>
              <br />
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                The Future of{" "}
              </motion.span>
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="gradient-text inline-block"
              >
                Industrial
              </motion.span>{" "}
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                Automation
              </motion.span>
            </motion.h1>

<motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
                }
              }}
              initial="hidden"
              animate="visible"
              className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl"
            >
              Revolutionary humanoid robotics technology designed for complex industrial environments. 
              Precision, safety, and intelligence combined to transform your manufacturing operations 
              with unprecedented efficiency and reliability.
            </motion.p>

<motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    staggerChildren: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Button size="lg" onClick={handleGetDemo} className="group">
                  Get Demo
                  <ApperIcon name="ArrowRight" className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </Button>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={handleLearnMore}
                  className="group"
                >
                  Learn More
                  <ApperIcon name="Play" className="w-5 h-5 ml-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
<motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    staggerChildren: 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <motion.div 
                variants={{ 
                  hidden: { opacity: 0, y: 20, scale: 0.9 }, 
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.6 }
                  }
                }}
                className="text-center lg:text-left group"
              >
                <motion.div 
                  className="text-3xl font-bold gradient-text"
whileHover={{ scale: window.innerWidth >= 768 ? 1.1 : 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  99.9%
                </motion.div>
                <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Uptime Reliability</div>
              </motion.div>
              <motion.div 
                variants={{ 
                  hidden: { opacity: 0, y: 20, scale: 0.9 }, 
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.6 }
                  }
                }}
                className="text-center lg:text-left group"
              >
                <motion.div 
                  className="text-3xl font-bold gradient-text"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  0.1mm
                </motion.div>
                <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Precision Accuracy</div>
              </motion.div>
              <motion.div 
                variants={{ 
                  hidden: { opacity: 0, y: 20, scale: 0.9 }, 
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.6 }
                  }
                }}
                className="text-center lg:text-left group"
              >
                <motion.div 
                  className="text-3xl font-bold gradient-text"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Continuous Operation</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Robot Visual */}
<motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="relative"
          >
            <div className="relative">
              {/* Main Robot Placeholder */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-3xl shadow-2xl relative overflow-hidden">
                  {/* Robot Body Outline */}
                  <div className="absolute inset-6 border-2 border-primary-400 rounded-2xl opacity-60"></div>
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-lg"></div>
                  
                  {/* Status Lights */}
                  <div className="absolute top-6 right-6 flex space-x-2">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-green-400 rounded-full shadow-lg"
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-3 h-3 bg-primary-400 rounded-full shadow-lg"
                    ></motion.div>
                  </div>

                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-10 h-full">
                      {[...Array(80)].map((_, i) => (
                        <div key={`grid-${i}`} className="border border-primary-300/30"></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <ApperIcon name="Cpu" className="w-12 h-12 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-primary-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <ApperIcon name="Zap" className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;