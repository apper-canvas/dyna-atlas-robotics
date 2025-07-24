import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent } from "@/components/atoms/Card";

const FeatureCard = ({ feature, index }) => {
  return (
<motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
<Card className="h-full p-6 group hover:bg-gradient-to-br hover:from-primary-50 hover:to-orange-50 border-2 hover:border-primary-200 transition-all duration-500">
        <CardContent className="p-0">
          <motion.div 
            className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg group-hover:shadow-2xl group-hover:shadow-primary-500/25 transition-all duration-500"
            whileHover={{ 
              scale: 1.15,
              rotate: 5,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          >
            <motion.div
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.6 }
              }}
            >
              <ApperIcon name={feature.icon} className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
          <motion.h3 
            className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {feature.title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {feature.description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;