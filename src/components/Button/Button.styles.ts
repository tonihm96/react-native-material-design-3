import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  xsmall: {
    height: 32,
    paddingHorizontal: 12,
    gap: 4,
  },
  small: {
    height: 40,
    paddingHorizontal: 16,
    gap: 8,
  },
  medium: {
    height: 56,
    paddingHorizontal: 24,
    gap: 8,
  },
  large: {
    height: 96,
    paddingHorizontal: 48,
    gap: 12,
  },
  xlarge: {
    height: 136,
    paddingHorizontal: 64,
    gap: 16,
  },
});

export default styles;
