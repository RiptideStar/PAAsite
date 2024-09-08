'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSlideshowProps {
  images: string[];
}

const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Penn Autism Alliance hero image ${index + 1}`}
          fill
          style={{ 
            objectFit: 'cover',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
          priority={index === 0}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow;
