import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/**
 * LazyImage Component
 * @param {string} src - The source of the image
 * @param {string} alt - Alternative text for the image
 * @param {string} className - Additional class names for styling
 * @returns Lazy loaded image
 */
const LazyImage = ({ src, alt, className = "" }) => {
  return (
    <LazyLoadImage
      className={className}
      src={src}
      alt={alt}
    />
  );
};

export default LazyImage;
