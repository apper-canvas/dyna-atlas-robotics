import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  onClick, 
  whileHover,
  transition,
  style,
  ...motionProps 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Generate optimized image sources
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return '';
    
    // Add WebP format and optimization parameters to Unsplash URLs
    if (originalSrc.includes('unsplash.com')) {
      const url = new URL(originalSrc);
      url.searchParams.set('fm', 'webp');
      url.searchParams.set('q', '85');
      url.searchParams.set('auto', 'format');
      return url.toString();
    }
    
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  // Create WebP source with fallback
  const optimizedSrc = getOptimizedSrc(src);
  const fallbackSrc = src;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={style}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 image-loading bg-gray-200 animate-pulse" />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Image unavailable</span>
          </div>
        </div>
      )}

      {/* Main image with lazy loading */}
      {isInView && (
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="block w-full h-full"
          onClick={onClick}
          whileHover={whileHover}
          {...motionProps}
        >
          {/* WebP source for modern browsers */}
          <source srcSet={optimizedSrc} type="image/webp" />
          
          {/* Fallback image */}
          <motion.img
            src={fallbackSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            decoding="async"
            style={{
              willChange: isLoaded ? 'auto' : 'transform, opacity',
              transform: 'translateZ(0)' // Force GPU acceleration
            }}
            whileHover={whileHover}
            transition={transition}
          />
        </motion.picture>
      )}
    </div>
  );
};

export default LazyImage;