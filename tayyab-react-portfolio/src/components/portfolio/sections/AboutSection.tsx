import React from 'react';

interface AboutSectionProps {
  logo?: { name: React.ReactNode };
  hero?: {
    titleLine1: React.ReactNode;
    titleLine2Gradient: React.ReactNode;
    subtitle: React.ReactNode;
  };
  ctaButtons?: {
    primary: { label: string; onClick?: () => void };
    secondary: { label: string; onClick?: () => void };
  };
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  logo,
  hero,
  ctaButtons
}) => {
  return (
    <main id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Left: Circular Image */}
          <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center md:items-start">
            <img
              src="/projects/Tayyab-Image.png"
              alt="Tayyab Mushtaq"
              className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-center shadow-2xl mb-4"
              style={{ objectPosition: 'center left' }}
            />
            <h2 className="md:text-5xl lg:text-6xl leading-[1.1] geist-font text-4xl font-light text-foreground tracking-tight text-center md:text-left mb-2">
              {logo?.name}
            </h2>
            <h3 className="md:text-3xl lg:text-4xl leading-[1.1] geist-font text-2xl font-light text-foreground tracking-tight text-center md:text-left">
              {hero?.titleLine1}
              {hero?.titleLine2Gradient && (
                <span className="gradient-text block tracking-tight">{hero?.titleLine2Gradient}</span>
              )}
            </h3>
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6 geist-font tracking-tight">Summary</h2>
            <p className="md:text-xl lg:text-2xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground md:mx-0 mx-auto mb-8">
              {hero?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center mb-16">
              <button
                onClick={ctaButtons?.primary?.onClick}
                className="primary-button px-6 py-3 text-foreground rounded-lg font-medium text-sm min-w-[160px]"
              >
                {ctaButtons?.primary?.label}
              </button>
              <button
                onClick={ctaButtons?.secondary?.onClick}
                className="glass-button min-w-[160px] inter-font text-sm font-medium text-foreground rounded-lg px-6 py-3"
              >
                {ctaButtons?.secondary?.label}
              </button>
            </div>
          </div>
        </div>
        <div className="divider mb-16" />
      </div>
    </main>
  );
};

