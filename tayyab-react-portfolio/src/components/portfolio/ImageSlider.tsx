import React from 'react';
import { ImageSliderProps } from '../../types';

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  currentIndex,
  onIndexChange,
  alt,
  className = '',
  showControls = true
}) => {
  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      onIndexChange(currentIndex + 1);
    }
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 1;

  return (
    <div className={`relative ${className}`}>
      <img
        src={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1} of ${images.length}`}
        className="w-full h-full object-cover rounded-xl transition-opacity duration-300"
      />
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`slider-nav-button slider-nav-button-left ${!canGoPrevious ? 'opacity-40 cursor-not-allowed' : ''}`}
            aria-label="Previous image"
            type="button"
          >
            <span className="slider-arrow">‹</span>
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`slider-nav-button slider-nav-button-right ${!canGoNext ? 'opacity-40 cursor-not-allowed' : ''}`}
            aria-label="Next image"
            type="button"
          >
            <span className="slider-arrow">›</span>
          </button>
        </>
      )}
    </div>
  );
};

