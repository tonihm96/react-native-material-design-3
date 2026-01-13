import { ReactNode, createContext, use, useMemo } from 'react';
import { Insets } from 'react-native';
import merge from 'deepmerge';

import { IconProps } from '@/components/Icon';
import { materialDesign3DefaultLightTheme } from '@/theme/default';
import { MaterialDesign3Theme } from '@/types/theme';
import { RecursivePartial } from '@/types/utils';

import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';

interface ThemeSettings {
  hitSlop?: number | Insets;
  icon?: (props: IconProps) => ReactNode;
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
  // @ts-expect-error - it is expected that the icon does not match the name prop type here
  icon: ({ icon, ...props }: IconProps) => <MaterialCommunityIcon name={icon} {...props} />,
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

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
};

export const useTheme = (
  overrides?: RecursivePartial<MaterialDesign3Theme>
): MaterialDesign3Theme => {
  const context = use(ThemeContext);

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
  const context = use(ThemeContext);

  const settings = context?.settings ?? DEFAULT_SETTINGS;

  return settings;
};
