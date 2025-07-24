import React, { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent, CardHeader } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";

const DetailsSection = () => {
  const [activeTab, setActiveTab] = useState('capabilities');

  const handleExploreFeatures = () => {
    const featuresSection = document.querySelector("#features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabs = [
    { id: 'capabilities', label: 'Core Capabilities', icon: 'Cpu' },
    { id: 'usecases', label: 'Use Cases', icon: 'Factory' },
    { id: 'technical', label: 'Technical Deep-dive', icon: 'Settings' }
  ];

  const capabilities = [
    {
      title: "Advanced AI Processing",
      description: "Atlas leverages cutting-edge neural networks and machine learning algorithms to process complex environmental data in real-time. Our proprietary AI system enables adaptive decision-making, predictive maintenance, and continuous learning from operational experiences.",
      features: ["Real-time environment mapping", "Predictive analytics", "Adaptive learning algorithms", "Computer vision integration"],
      icon: "Brain"
    },
    {
      title: "Superior Mobility System",
      description: "Engineered with 28 degrees of freedom and advanced locomotion algorithms, Atlas navigates complex industrial environments with human-like agility. Dynamic balance control and terrain adaptation ensure reliable operation across diverse surfaces and conditions.",
      features: ["28 DOF articulation", "Dynamic balance control", "Obstacle navigation", "Multi-terrain adaptation"],
      icon: "Navigation"
    },
    {
      title: "Comprehensive Safety Framework",
      description: "Safety is paramount in Atlas design. Multiple redundant systems, emergency stop protocols, and advanced collision detection ensure zero-incident operation. Compliant with ISO 13849 and IEC 61508 safety standards for industrial automation.",
      features: ["Redundant safety systems", "Emergency stop protocols", "Collision detection", "ISO compliance"],
      icon: "Shield"
    }
  ];

  const useCases = [
    {
      category: "Manufacturing",
      title: "Precision Assembly Operations",
      description: "Atlas excels in complex assembly tasks requiring sub-millimeter precision. From automotive component installation to electronics manufacturing, Atlas maintains consistent quality while adapting to product variations.",
      applications: [
        "Automotive part assembly with 0.1mm tolerance",
        "Electronics component placement and soldering",
        "Quality inspection using integrated vision systems",
        "Material handling between production stations"
      ],
      metrics: { efficiency: "40% increase", accuracy: "99.9%", uptime: "99.7%" },
      icon: "Wrench"
    },
    {
      category: "Logistics",
      title: "Intelligent Warehouse Automation",
      description: "Transform warehouse operations with Atlas's adaptive logistics capabilities. From inventory management to order fulfillment, Atlas optimizes workflows while maintaining safety in human-collaborative environments.",
      applications: [
        "Automated picking and packing operations",
        "Inventory tracking and management",
        "Heavy lifting up to 25kg payload capacity",
        "Cross-docking and sorting operations"
      ],
      metrics: { throughput: "60% increase", accuracy: "99.8%", safety: "Zero incidents" },
      icon: "Package"
    },
    {
      category: "Research",
      title: "Advanced Research Applications",
      description: "Atlas serves as a versatile platform for research institutions and R&D departments. Its modular design and open API enable custom applications in materials science, biotechnology, and experimental automation.",
      applications: [
        "Laboratory sample handling and testing",
        "Hazardous material manipulation",
        "Repetitive experimental procedures",
        "Data collection in extreme environments"
      ],
      metrics: { precision: "Nanometer level", availability: "24/7", flexibility: "100+ configurations" },
      icon: "Microscope"
    }
  ];

  const technicalSpecs = [
    {
      category: "Artificial Intelligence",
      title: "Neural Processing Architecture",
      description: "Atlas employs a distributed AI architecture with dedicated processing units for vision, motion planning, and decision-making. The system processes over 1TB of sensor data per hour, enabling real-time responses to dynamic environments.",
      details: [
        "12 TOPS neural processing power",
        "Real-time sensor fusion from 50+ inputs",
        "Edge AI processing with cloud connectivity",
        "Continuous learning with federated training"
      ],
      icon: "Cpu"
    },
    {
      category: "Mobility Systems",
      title: "Biomimetic Locomotion",
      description: "Inspired by human biomechanics, Atlas's mobility system combines advanced actuators, sensors, and control algorithms. The result is fluid, natural movement that adapts to any industrial environment.",
      details: [
        "Hydraulic-electric hybrid actuators",
        "Force-torque sensing at every joint",
        "Advanced gait optimization algorithms",
        "Real-time balance and stability control"
      ],
      icon: "Activity"
    },
    {
      category: "Safety Systems",
      title: "Multi-layered Protection",
      description: "Atlas incorporates multiple safety layers, from hardware-level emergency stops to AI-driven risk assessment. Every system is designed with fail-safe principles and redundant backups.",
      details: [
        "Hardware emergency stop systems",
        "AI-powered risk assessment",
        "Redundant sensor arrays",
        "Compliance with SIL 3 safety standards"
      ],
      icon: "ShieldCheck"
    }
  ];

  return (
    <section id="details" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-100 to-primary-100 rounded-full opacity-25 blur-3xl translate-x-1/2 translate-y-1/2"></div>

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
            <ApperIcon name="BookOpen" className="w-4 h-4 mr-2" />
            Comprehensive Details
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
          >
            Deep Dive into{" "}
            <span className="gradient-text">Atlas Technology</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Explore the advanced engineering, real-world applications, and technical innovations 
            that make Atlas the most capable humanoid robot for industrial environments.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-2">
{tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <ApperIcon name={tab.icon} className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'capabilities' && (
            <div className="space-y-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-gray-50 to-primary-50 pb-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <ApperIcon name={capability.icon} className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {capability.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'usecases' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader className="text-center pb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <ApperIcon name={useCase.icon} className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-primary-600 mb-2">{useCase.category}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Applications:</h4>
                          <ul className="space-y-2">
                            {useCase.applications.map((app, appIndex) => (
                              <li key={appIndex} className="flex items-start space-x-2 text-sm">
                                <ApperIcon name="ArrowRight" className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3">Performance Metrics:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {Object.entries(useCase.metrics).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center text-sm">
                                <span className="text-gray-600 capitalize">{key}:</span>
                                <span className="font-semibold text-primary-600">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-8">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={spec.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                          <ApperIcon name={spec.icon} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary-300 mb-1">{spec.category}</div>
                          <h3 className="text-xl font-bold">{spec.title}</h3>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600 leading-relaxed mb-6">{spec.description}</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {spec.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <ApperIcon name="Zap" className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Atlas in Action?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover how Atlas's advanced capabilities can transform your operations with 
              unmatched precision, safety, and efficiency.
            </p>
            <Button onClick={handleExploreFeatures} size="lg" className="group">
              Explore Features
              <ApperIcon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsSection;