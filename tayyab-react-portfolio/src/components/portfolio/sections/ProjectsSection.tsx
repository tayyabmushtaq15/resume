import React, { useState, useCallback } from 'react';
import { Project } from '../../../types';
import { extractImageSrc } from '../../../utils/imageUtils';
import { ImageModal } from '../ImageModal';

interface ProjectsSectionProps {
  projects?: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    images?: string[];
    initialIndex?: number;
  } | null>(null);

  const handleImageClick = useCallback((project: Project) => {
    const hasMultipleImages = project?.images && project.images.length > 0;
    const imageSrc = project?.imageContent ? extractImageSrc(project.imageContent) : null;

    if (hasMultipleImages && project.images) {
      setSelectedImage({
        src: project.images[0],
        alt: project.title,
        images: project.images,
        initialIndex: 0
      });
    } else if (imageSrc) {
      setSelectedImage({ src: imageSrc, alt: project.title });
    }
  }, []);

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 text-center geist-font">Projects</h2>
      <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {projects?.map((project, index) => {
          const hasMultipleImages = project?.images && project.images.length > 0;
          const imageSrc = project?.imageContent ? extractImageSrc(project.imageContent) : null;
          const firstImageSrc = hasMultipleImages && project.images ? project.images[0] : null;

          return (
            <div key={index} className="glass-card rounded-2xl p-6 text-left relative">
              {hasMultipleImages && firstImageSrc ? (
                <div
                  className="project-image rounded-xl h-32 mb-4 flex items-center justify-center overflow-hidden relative cursor-pointer"
                  onClick={() => handleImageClick(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleImageClick(project);
                    }
                  }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <img
                    src={firstImageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ) : imageSrc ? (
                <div
                  className="project-image rounded-xl h-32 mb-4 flex items-center justify-center overflow-hidden relative cursor-pointer"
                  onClick={() => handleImageClick(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && imageSrc) {
                      e.preventDefault();
                      handleImageClick(project);
                    }
                  }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <div style={{ pointerEvents: 'none' }}>
                    {project?.imageContent}
                  </div>
                </div>
              ) : (
                <div className="project-image rounded-xl h-32 mb-4 flex items-center justify-center overflow-hidden relative">
                  {project?.imageContent}
                </div>
              )}
              <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">{project.title}</h3>
              <p className="text-muted-foreground text-sm inter-font mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <ImageModal
          imageSrc={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          images={selectedImage.images}
          initialIndex={selectedImage.initialIndex}
        />
      )}
    </>
  );
};

