import { Slot } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@/contexts/theme';
import { materialDesign3DefaultDarkTheme, materialDesign3DefaultLightTheme } from '@/theme/default';

const RootLayout = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <SafeAreaProvider>
      <ThemeProvider
        theme={isDark ? materialDesign3DefaultDarkTheme : materialDesign3DefaultLightTheme}
      >
        <Slot />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
