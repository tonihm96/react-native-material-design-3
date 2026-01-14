import { MaterialDesign3TypeScale } from '@/types/typeScale';
import { StyleSheet } from 'react-native';

const fonts: MaterialDesign3TypeScale = StyleSheet.create<MaterialDesign3TypeScale>({
  displayLarge: {
    fontFamily: 'Roboto',
    fontSize: 57,
    lineHeight: 64,
    fontWeight: '400',
    letterSpacing: -0.25,
  },
  displayMedium: {
    fontFamily: 'Roboto',
    fontSize: 45,
    lineHeight: 52,
    fontWeight: '400',
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: 'Roboto',
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '400',
    letterSpacing: 0,
  },

  headlineLarge: {
    fontFamily: 'Roboto',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '400',
    letterSpacing: 0,
  },
  headlineMedium: {
    fontFamily: 'Roboto',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '400',
    letterSpacing: 0,
  },
  headlineSmall: {
    fontFamily: 'Roboto',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400',
    letterSpacing: 0,
  },

  titleLarge: {
    fontFamily: 'Roboto',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '400',
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 0.1,
  },

  bodyLarge: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  bodyMedium: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    letterSpacing: 0.4,
  },

  labelLarge: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontFamily: 'Roboto',
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});

export default fonts;
