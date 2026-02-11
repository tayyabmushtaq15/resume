import { useContext } from 'react';
import { ThemeContext } from '../components/shared/ThemeProvider';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export type { Theme, ThemeContextType } from '../components/shared/ThemeProvider';

