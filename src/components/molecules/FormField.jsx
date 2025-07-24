import React from "react";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";

const FormField = ({ 
  label, 
  id, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error,
  multiline = false,
  className = ""
}) => {
  const InputComponent = multiline ? Textarea : Input;

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <InputComponent
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormField;