import React from "react";
import { cn } from "@/utils/cn";

const NavigationLink = ({ href, label, isActive, onClick, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(href);
    }
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
        isActive ? "text-primary-600 bg-primary-50" : "text-gray-700",
        className
      )}
    >
      {label}
    </a>
  );
};

export default NavigationLink;