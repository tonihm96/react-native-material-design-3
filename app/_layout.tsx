import { Slot } from 'expo-router';

import { ThemeProvider } from '@/contexts/theme';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
