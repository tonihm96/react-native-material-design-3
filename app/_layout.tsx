import { Slot } from 'expo-router';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from '@/contexts/theme';
import { materialDesign3DefaultDarkTheme, materialDesign3DefaultLightTheme } from '@/theme/default';

export default function RootLayout() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <ThemeProvider
      theme={isDark ? materialDesign3DefaultDarkTheme : materialDesign3DefaultLightTheme}
    >
      <Slot />
    </ThemeProvider>
  );
}
