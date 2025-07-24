import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const MadeByHumansSection = () => {
  const values = [
    {
      icon: "Heart",
      title: "Human-Centered Design",
      description: "Every Atlas robot is designed with human workers in mind, enhancing rather than replacing human capabilities.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "Shield",
      title: "Ethical AI Development",
      description: "We prioritize transparency, safety, and responsible AI practices in every line of code we write.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Users",
      title: "Collaborative Partnership",
      description: "Our robots work alongside humans as teammates, amplifying productivity while preserving job satisfaction.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "Brain",
      title: "Responsible Innovation",
      description: "We believe technology should serve humanity, creating solutions that improve working conditions for everyone.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Ethics Officer",
      specialty: "Responsible AI Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Human-Robot Interaction Lead",
      specialty: "Collaborative Robotics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Safety & Ergonomics Director",
      specialty: "Workplace Safety Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Liu",
      role: "Industrial Psychology Lead",
      specialty: "Human Factors Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const philosophyPoints = [
    {
      title: "Augmentation, Not Replacement",
      description: "We believe in amplifying human capabilities rather than replacing human workers. Atlas robots handle repetitive, dangerous, or physically demanding tasks while humans focus on creative problem-solving and decision-making."
    },
    {
      title: "Transparent AI Systems",
      description: "Our AI systems are designed with explainability at their core. Every decision made by Atlas can be understood, audited, and refined by human operators, ensuring trust and accountability."
    },
    {
      title: "Worker Well-being First",
      description: "We prioritize the physical and mental well-being of human workers. Atlas robots reduce workplace injuries, eliminate ergonomic strain, and create more fulfilling job roles for human team members."
    },
    {
      title: "Continuous Human Oversight",
      description: "While Atlas operates autonomously, human oversight remains central to our design philosophy. Workers maintain control, make critical decisions, and guide the robot's learning process."
    }
  ];

  return (
<section id="made-by-humans" className="py-12 sm:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100 to-blue-100 rounded-full opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100 to-primary-100 rounded-full opacity-25 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full text-white text-sm font-medium mb-6 lg:mb-8"
          >
            <ApperIcon name="Heart" className="w-4 h-4 mr-2" />
            Made By Humans, For Humans
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 lg:mb-8"
          >
            Our <span className="gradient-text">Human-Centered</span><br className="hidden sm:block" />
            Philosophy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            At Atlas Robotics, we believe that the future of work isn't about humans versus machines—it's about 
            humans and machines working together. Every line of code, every design decision, and every innovation 
            is guided by our commitment to enhancing human potential while preserving the irreplaceable value 
            of human creativity, empathy, and judgment.
          </motion.p>
        </div>

        {/* Company Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ApperIcon name={value.icon} className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Philosophy Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
              Responsible AI & Robotics <span className="gradient-text">Principles</span>
            </h3>
            
            <div className="space-y-6 lg:space-y-8">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary-500 pl-4 lg:pl-6"
                >
                  <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2 lg:mb-3">
                    {point.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Collaboration Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Human-robot collaboration in manufacturing"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white">
                <h4 className="text-base lg:text-lg font-bold mb-1 lg:mb-2">Collaborative Workspace</h4>
                <p className="text-xs lg:text-sm opacity-90">Humans and Atlas robots working side by side</p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-xl p-4 lg:p-6 shadow-xl border border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">95%</div>
                <div className="text-xs lg:text-sm text-gray-600">Worker Satisfaction</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-green-500 text-white rounded-xl p-4 lg:p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold mb-1">0</div>
                <div className="text-xs lg:text-sm opacity-90">Job Losses</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-8 lg:mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Meet Our <span className="gradient-text">Human-Centered</span> Team
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our diverse team of engineers, ethicists, and human factors experts ensures that every Atlas robot 
            enhances human potential while respecting human dignity and autonomy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mb-4 lg:mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 lg:w-32 lg:h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-primary-600 font-medium mb-2 text-sm lg:text-base">{member.role}</p>
              <p className="text-xs lg:text-sm text-gray-600">{member.specialty}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Ready to Experience Human-Centered Robotics?
          </h3>
          <p className="text-lg lg:text-xl opacity-90 mb-6 lg:mb-8 max-w-3xl mx-auto">
            Discover how Atlas robots can enhance your workforce while preserving the human elements 
            that make your business unique. Let's build a better future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary-600 border-white hover:bg-primary-50 group min-h-[48px]"
            >
              Learn Our Values
              <ApperIcon name="Heart" className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 group min-h-[48px]"
            >
              Meet Our Team
              <ApperIcon name="Users" className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MadeByHumansSection;