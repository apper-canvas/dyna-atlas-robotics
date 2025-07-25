import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Thank you for your inquiry! We'll be in touch within 24 hours to schedule your Atlas demonstration.", {
        position: "top-right",
        autoClose: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setIsSubmitting(false);
}
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!newsletterEmail.trim()) {
      setNewsletterError("Email is required");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError("Please enter a valid email address");
      return;
    }

    setIsNewsletterSubmitting(true);
    setNewsletterError("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Welcome to Atlas Insights! You'll receive our latest updates, feature announcements, and industry insights directly in your inbox.", {
        position: "top-right",
        autoClose: 5000,
      });

      // Reset form
      setNewsletterEmail("");
    } catch (error) {
      toast.error("Unable to subscribe at this time. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const handleNewsletterEmailChange = (e) => {
    setNewsletterEmail(e.target.value);
    if (newsletterError) {
      setNewsletterError("");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-orange-500/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-500/20 to-orange-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500/20 to-primary-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full text-white text-sm font-medium mb-6"
            >
              <ApperIcon name="MessageCircle" className="w-4 h-4 mr-2" />
              Get In Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
            >
              Ready to Transform Your{" "}
              <span className="gradient-text">Operations?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed mb-10"
            >
              Schedule a personalized demonstration of Atlas and discover how our advanced 
              humanoid robotics can revolutionize your industrial processes. Our experts 
              will work with you to design the perfect automation solution for your facility.
            </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Phone" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-300">+1 (555) 123-ATLAS</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Mail" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-300">contact@atlasrobotics.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <ApperIcon name="MapPin" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Headquarters</div>
                  <div className="text-gray-300">Boston, MA • Silicon Valley, CA</div>
                </div>
              </div>
</motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 p-6 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-xl border border-primary-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 mb-4">
                <ApperIcon name="Mail" className="w-6 h-6 text-primary-400" />
                <span className="text-white font-semibold text-lg">Stay Updated with Atlas Insights</span>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Get exclusive access to the latest Atlas robot updates, cutting-edge features, and industry insights. 
                Join thousands of professionals revolutionizing their operations with humanoid robotics.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={handleNewsletterEmailChange}
                      placeholder="Enter your email for Atlas updates"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      disabled={isNewsletterSubmitting}
                    />
                    {newsletterError && (
                      <p className="text-red-400 text-xs mt-1">{newsletterError}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isNewsletterSubmitting}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isNewsletterSubmitting ? (
                      <>
                        <ApperIcon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              
              <div className="flex items-start space-x-2 mt-4">
                <ApperIcon name="Shield" className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-xs">
                  We respect your privacy. Unsubscribe anytime. No spam, just valuable robotics insights.
                </p>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 p-6 bg-gradient-to-r from-primary-500/20 to-orange-500/20 rounded-xl border border-primary-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 mb-3">
                <ApperIcon name="Clock" className="w-6 h-6 text-primary-400" />
                <span className="text-white font-semibold">Quick Response Guarantee</span>
              </div>
              <p className="text-gray-300 text-sm">
                We respond to all inquiries within 4 hours during business hours. 
                Demo consultations are typically scheduled within 48 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
<motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200">
              <div className="mb-6 lg:mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Schedule Your Demo
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <FormField
                    label="Full Name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    error={errors.name}
                  />
                  <FormField
                    label="Company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    required
                    error={errors.company}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <FormField
                    label="Email Address"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    error={errors.email}
                  />
                  <FormField
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                    error={errors.phone}
                  />
                </div>

                <FormField
                  label="Message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your automation needs, facility size, and specific applications you're considering..."
                  required
                  error={errors.message}
                  multiline
                />

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group min-h-[48px]" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <ApperIcon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Schedule Demo
                        <ApperIcon name="Send" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-xs text-gray-500 text-center pt-4">
                  By submitting this form, you agree to be contacted by our team regarding Atlas robotics solutions. 
                  We respect your privacy and will never share your information.
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;