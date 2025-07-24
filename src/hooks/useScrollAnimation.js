import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for consistent scroll-triggered animations
 * @param {Object} options - Animation configuration options
 * @param {number} options.delay - Delay before animation starts (default: 0)
 * @param {number} options.stagger - Stagger delay for multiple items (default: 0.1)
 * @param {boolean} options.once - Whether animation should only trigger once (default: true)
 * @param {number} options.threshold - Intersection threshold (default: 0.1)
 * @param {string} options.margin - Root margin for intersection observer (default: '-100px')
 */
export const useScrollAnimation = (options = {}) => {
  const {
    delay = 0,
    stagger = 0.1,
    once = true,
    threshold = 0.1,
    margin = '-50px'
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    threshold,
    margin
  });

  // Base animation variants for consistent behavior
  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth motion
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  // Variants for staggered children
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Slide from left variant
  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  // Slide from right variant
  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return {
    ref,
    isInView,
    variants,
    childVariants,
    slideLeftVariants,
    slideRightVariants,
    controls: isInView ? 'visible' : 'hidden'
  };
};