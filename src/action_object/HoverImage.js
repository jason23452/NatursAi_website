import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

/**
 * HoverImage Component
 * @param {string} defaultSrc - The default image source
 * @param {string} hoverSrc - The hover image source
 * @param {string} className - Additional class names for styling
 */
const HoverImage = React.memo(({ defaultSrc, hoverSrc, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <LazyLoadImage
            className={className}
            src={isHovered ? hoverSrc : defaultSrc}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            alt="hoverable image"
        />
    );
});

export default HoverImage;
