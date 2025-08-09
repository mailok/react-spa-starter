import { createContext, useContext, useEffect, useState } from 'react';
import { themes } from './themes';

export type ColorTheme = 'default' | 'blue' | 'green' | 'purple';

type ColorThemeContextType = {
  currentTheme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ColorThemeContext = createContext<
  ColorThemeContextType | undefined
>(undefined);

export function ColorThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(() => {
    return (localStorage.getItem('color-theme') as ColorTheme) || 'default';
  });

  const applyTheme = (theme: ColorTheme, isDark: boolean) => {
    const root = document.documentElement;
    const themeData = themes[theme as keyof typeof themes];

    const colorVariables = isDark ? themeData.dark : themeData.colors;
    Object.entries(colorVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value as string);
    });

    Object.entries(themeData.sizing).forEach(([property, value]) => {
      root.style.setProperty(property, value as string);
    });

    Object.entries(themeData.layout).forEach(([property, value]) => {
      root.style.setProperty(property, value as string);
    });
  };

  const setTheme = (theme: ColorTheme) => {
    setCurrentTheme(theme);
    localStorage.setItem('color-theme', theme);
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(theme, isDark);
  };

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(currentTheme, isDark);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const isDark = document.documentElement.classList.contains('dark');
          applyTheme(currentTheme, isDark);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, [currentTheme]);

  const value: ColorThemeContextType = { currentTheme, setTheme };

  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider');
  }
  return context;
}
