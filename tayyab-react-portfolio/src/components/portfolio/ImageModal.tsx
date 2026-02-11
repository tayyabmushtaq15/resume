import React, { useEffect, useState } from 'react';
import { ImageModalProps } from '../../types';
import { ImageSlider } from './ImageSlider';

export const ImageModal: React.FC<ImageModalProps> = ({
  imageSrc,
  alt,
  isOpen,
  onClose,
  images,
  initialIndex = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const hasMultipleImages = images && images.length > 1;
  const displayImages = images || [imageSrc];
  const currentImage = displayImages[currentIndex] || imageSrc;

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (hasMultipleImages) {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < displayImages.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, hasMultipleImages, currentIndex, displayImages.length]);

  if (!isOpen) return null;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < displayImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < displayImages.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl font-light transition-all hover:scale-110 leading-none"
          aria-label="Close"
          style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span style={{ display: 'flex', marginBottom: '4px', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>×</span>
        </button>
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className={`absolute left-1 z-10 w-12 h-12 rounded-full bg-blue-500/80 hover:bg-blue-500/90 backdrop-blur-md border border-blue-400/60 flex items-center justify-center text-white text-2xl font-light transition-all hover:scale-110 shadow-lg ${!canGoPrevious ? 'opacity-40 cursor-not-allowed' : ''}`}
              aria-label="Previous image"
              type="button"
            >
              <span className="slider-arrow">‹</span>
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`absolute right-1 z-10 w-12 h-12 rounded-full bg-blue-500/80 hover:bg-blue-500/90 backdrop-blur-md border border-blue-400/60 flex items-center justify-center text-white text-2xl font-light transition-all hover:scale-110 shadow-lg ${!canGoNext ? 'opacity-40 cursor-not-allowed' : ''}`}
              aria-label="Next image"
              type="button"
            >
              <span className="slider-arrow">›</span>
            </button>
          </>
        )}
        {hasMultipleImages ? (
          <ImageSlider
            images={displayImages}
            currentIndex={currentIndex}
            onIndexChange={setCurrentIndex}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            showControls={false}
          />
        ) : (
          <img
            src={currentImage}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
            {currentIndex + 1} / {displayImages.length}
          </div>
        )}
      </div>
    </div>
  );
};

