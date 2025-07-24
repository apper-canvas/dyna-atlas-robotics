import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import imageShowcaseService from "@/services/api/imageShowcaseService";
import { toast } from "react-toastify";

const ImageShowcase = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBefore, setShowBefore] = useState({});

  const categories = [
    { id: "all", label: "All Environments", icon: "Grid3X3" },
    { id: "manufacturing", label: "Manufacturing", icon: "Settings" },
    { id: "warehouse", label: "Warehouse", icon: "Package" },
    { id: "research", label: "Research", icon: "Microscope" }
  ];

  useEffect(() => {
    loadImages();
  }, []);

const loadImages = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await imageShowcaseService.getAll();
      setImages(data);
      
      // Initialize showBefore state for all images
      const initialShowBefore = {};
      data.forEach(image => {
        initialShowBefore[image.Id] = true;
      });
      setShowBefore(initialShowBefore);
      
    } catch (err) {
      setError("Failed to load image showcase");
      toast.error("Failed to load images");
      console.error("Image showcase error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryFilter = async (category) => {
    try {
      setSelectedCategory(category);
      if (category === "all") {
        const data = await imageShowcaseService.getAll();
        setImages(data);
      } else {
        const data = await imageShowcaseService.getByCategory(category);
        setImages(data);
      }
      toast.info(`Showing ${category === "all" ? "all" : category} environments`);
    } catch (err) {
      toast.error("Failed to filter images");
      console.error("Filter error:", err);
    }
  };

  const toggleImageView = (imageId) => {
    setShowBefore(prev => ({
      ...prev,
      [imageId]: !prev[imageId]
    }));
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-32 h-8 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="w-32 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-6 space-y-3">
                  <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-red-600 mb-4">
              <ApperIcon name="AlertCircle" className="w-6 h-6" />
              <span className="text-lg font-medium">Image Showcase Unavailable</span>
            </div>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={loadImages} variant="outline">
              <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Atlas in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Atlas transforms industries with precision, safety, and efficiency. 
            Explore before and after scenarios across manufacturing, warehouse, and research environments.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryFilter(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="flex items-center space-x-2"
            >
              <ApperIcon name={category.icon} className="w-4 h-4" />
              <span>{category.label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.Id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden group cursor-pointer">
                  <motion.img
                    src={showBefore[image.Id] ? image.beforeImage : image.afterImage}
                    alt={`${image.title} - ${showBefore[image.Id] ? 'Before' : 'After'}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onClick={() => openImageModal(image)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Before/After Toggle */}
                  <div className="absolute top-4 right-4">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleImageView(image.Id);
                      }}
                      variant="outline"
                      size="sm"
                      className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white text-gray-900"
                    >
                      {showBefore[image.Id] ? "After" : "Before"}
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 capitalize">
                      {image.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          openImageModal(image);
                        }}
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                      >
                        <ApperIcon name="Eye" className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {image.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <ApperIcon name="MapPin" className="w-4 h-4 mr-1" />
                      {image.environment}
                    </span>
                  </div>

                  {/* Improvements List */}
                  <div className="space-y-2">
                    {image.improvements.slice(0, 2).map((improvement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 text-green-500" />
                        {improvement}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <ApperIcon name="Search" className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No images found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeImageModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={showBefore[selectedImage.Id] ? selectedImage.beforeImage : selectedImage.afterImage}
                    alt={selectedImage.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <Button
                    onClick={closeImageModal}
                    variant="outline"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm"
                  >
                    <ApperIcon name="X" className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedImage.title}
                    </h3>
                    <Button
                      onClick={() => toggleImageView(selectedImage.Id)}
                      variant="outline"
                      size="sm"
                    >
                      Show {showBefore[selectedImage.Id] ? "After" : "Before"}
                    </Button>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {selectedImage.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Environment</h4>
                      <p className="text-gray-600">{selectedImage.environment}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Improvements</h4>
                      <ul className="space-y-2">
                        {selectedImage.improvements.map((improvement, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2 text-green-500" />
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImageShowcase;