import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-lg">
        <ApperIcon name="Bot" className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold gradient-text">Atlas</span>
        <span className="text-xs text-gray-500 -mt-1">Robotics</span>
      </div>
    </div>
  );
};

export default Logo;