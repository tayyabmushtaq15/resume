import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageContent?: React.ReactNode;
  images?: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface PortfolioPageProps {
  logo?: { initials: React.ReactNode; name: React.ReactNode };
  navLinks?: NavLink[];
  resume?: { label: string; onClick?: () => void };
  hero?: {
    titleLine1: React.ReactNode;
    titleLine2Gradient: React.ReactNode;
    subtitle: React.ReactNode;
  };
  ctaButtons?: {
    primary: { label: string; onClick?: () => void };
    secondary: { label: string; onClick?: () => void };
  };
  projects?: Project[];
  stats?: Stat[];
  showAnimatedBackground?: boolean;
}

export interface ImageSliderProps {
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  alt: string;
  className?: string;
  showControls?: boolean;
}

export interface ImageModalProps {
  imageSrc: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
  initialIndex?: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

