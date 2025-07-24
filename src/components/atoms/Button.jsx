import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ className, variant = "primary", size = "md", children, ...props }, ref) => {
const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform-gpu min-h-[44px] min-w-[44px]";
const variants = {
  primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-2xl hover:shadow-primary-500/25 hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 active:shadow-lg",
  secondary: "bg-white text-primary-600 border-2 border-primary-500 hover:bg-primary-50 focus:ring-primary-500 hover:border-primary-600 shadow-sm hover:shadow-lg hover:shadow-primary-500/10 hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0",
  outline: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500 hover:border-gray-400 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0",
  ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500 hover:scale-105 active:scale-100"
};

  const sizes = {
sm: "px-4 py-3 text-sm rounded-md",
    md: "px-6 py-4 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-10 py-5 text-xl rounded-xl"
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;