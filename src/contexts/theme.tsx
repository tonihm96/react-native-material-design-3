import { ReactNode, createContext, useContext, useMemo } from 'react';

import merge from 'deepmerge';

import { materialDesign3DefaultLightTheme } from '@/theme/default';
import { MaterialDesign3Theme } from '@/types/theme';
import { RecursivePartial } from '@/types/utils';
import { Insets } from 'react-native';

interface ThemeSettings {
  hitSlop?: number | Insets;
}

interface ThemeProviderProps {
  children: ReactNode;
  theme?: RecursivePartial<MaterialDesign3Theme>;
  settings?: ThemeSettings;
}

interface ThemeContextProps {
  theme: MaterialDesign3Theme;
  settings: ThemeSettings;
}

const DEFAULT_SETTINGS: ThemeSettings = {
  hitSlop: 8,
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children, theme, settings }: ThemeProviderProps) => {
  const mergedTheme = useMemo(() => {
    if (theme) {
      return merge(materialDesign3DefaultLightTheme, theme) as MaterialDesign3Theme;
    }
    return materialDesign3DefaultLightTheme;
  }, [theme]);

  const mergedSettings: ThemeSettings = useMemo(
    () => ({ ...DEFAULT_SETTINGS, ...settings }),
    [settings]
  );

  const contextValue = useMemo(
    () => ({ theme: mergedTheme, settings: mergedSettings }),
    [mergedTheme, mergedSettings]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = (
  overrides?: RecursivePartial<MaterialDesign3Theme>
): MaterialDesign3Theme => {
  const context = useContext(ThemeContext);

  const theme = context?.theme ?? materialDesign3DefaultLightTheme;

  const mergedTheme = useMemo(() => {
    if (overrides) {
      return merge(theme, overrides) as MaterialDesign3Theme;
    }
    return theme;
  }, [theme, overrides]);

  return mergedTheme;
};

export const useThemeSettings = (): ThemeSettings => {
  const context = useContext(ThemeContext);

  const settings = context?.settings ?? DEFAULT_SETTINGS;

  return settings;
};
