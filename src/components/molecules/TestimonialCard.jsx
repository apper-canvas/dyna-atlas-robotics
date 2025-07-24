import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent } from "@/components/atoms/Card";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        <CardContent className="p-0 relative z-10">
          <div className="flex items-center mb-6">
            <ApperIcon name="Quote" className="w-8 h-8 text-primary-500 mb-4" />
          </div>
          <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
            "{testimonial.quote}"
          </blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg mr-4">
              <ApperIcon name="Building2" className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                {testimonial.author}
              </div>
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