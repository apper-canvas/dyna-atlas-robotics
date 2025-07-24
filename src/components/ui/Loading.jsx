import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-primary-500"></div>
        {/* Inner icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ApperIcon name="Bot" className="w-6 h-6 text-primary-500" />
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-lg font-medium">{message}</p>
      <div className="mt-2 text-sm text-gray-400">Please wait while we load the content</div>
    </div>
  );
};

export default Loading;