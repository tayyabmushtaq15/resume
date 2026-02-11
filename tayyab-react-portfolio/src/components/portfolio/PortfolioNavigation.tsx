import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from '../../types';
import { useTheme } from '../../hooks/useTheme';

interface PortfolioNavigationProps {
  logo?: { initials: React.ReactNode; name: React.ReactNode };
  navLinks?: NavLink[];
  resume?: { label: string; onClick?: () => void };
}

export const PortfolioNavigation: React.FC<PortfolioNavigationProps> = ({
  logo,
  navLinks,
  resume
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-6 py-4 bg-background/80 backdrop-blur-sm z-50 border-b opacity-70">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center">
            <span className="geist-font text-sm font-bold text-foreground">{logo?.initials}</span>
          </div>
          <span className="geist-font text-lg font-medium text-foreground">My Portfolio</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks?.map(link => (
            <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inter-font text-sm">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="glass-button p-2 rounded-lg text-foreground hover:scale-110 transition-transform"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button onClick={resume?.onClick} className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font">
            {resume?.label}
          </button>
        </div>
      </div>
    </nav>
  );
};

