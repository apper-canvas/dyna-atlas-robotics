import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent } from "@/components/atoms/Card";

const TestimonialCard = ({ testimonial, index }) => {
  return (
<motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="h-full"
    >
<Card className="h-full p-8 relative overflow-hidden group border-2 hover:border-primary-200 transition-all duration-500">
        <motion.div 
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-80 transition-all duration-500"
          whileHover={{ scale: 1.2, rotate: 90 }}
          transition={{ duration: 0.5 }}
        />
        <CardContent className="p-0 relative z-10">
          <motion.div 
            className="flex items-center mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            >
              <ApperIcon name="Quote" className="w-8 h-8 text-primary-500 mb-4" />
            </motion.div>
          </motion.div>
          <motion.blockquote 
            className="text-lg text-gray-700 italic leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.01 }}
          >
            "{testimonial.quote}"
          </motion.blockquote>
          <div className="flex items-center">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg mr-4 group-hover:shadow-xl group-hover:shadow-primary-500/25 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <ApperIcon name="Building2" className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <motion.div 
                className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {testimonial.author}
              </motion.div>
              <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {testimonial.position}
              </div>
              <div className="text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                {testimonial.company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;