'use client';

import { useTheme } from 'next-themes';
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AutoThemeContextType {
  isAutoThemeEnabled: boolean;
  setIsAutoThemeEnabled: (isEnabled: boolean) => void;
}

const AutoThemeContext = createContext<AutoThemeContextType | undefined>(undefined);

export const useAutoTheme = () => {
  const context = useContext(AutoThemeContext);
  if (!context) {
    throw new Error('useAutoTheme must be used within an AutoThemeProvider');
  }
  return context;
};

export const AutoThemeSwitcher: React.FC = () => {
  const { isAutoThemeEnabled } = useAutoTheme();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isAutoThemeEnabled) {
      intervalId = setInterval(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }, 20 * 60 * 1000); // 20 minutes
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoThemeEnabled, theme, setTheme]);

  return null; // This component does not render anything
};


export const AutoThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isAutoThemeEnabled, setIsAutoThemeEnabled] = useState(false);

  return (
    <AutoThemeContext.Provider value={{ isAutoThemeEnabled, setIsAutoThemeEnabled }}>
      {children}
      <AutoThemeSwitcher />
    </AutoThemeContext.Provider>
  );
};
