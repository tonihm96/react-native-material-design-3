import { Ref } from 'react';
import { TextProps as NativeTextProps } from 'react-native';
import Animated, { AnimatedProps } from 'react-native-reanimated';

import { useTheme } from '@/contexts/theme';
import { MaterialDesign3ThemeFonts } from '@/types/theme';

export interface TextProps extends AnimatedProps<NativeTextProps> {
  ref?: Ref<Animated.Text>;
  variant?: keyof MaterialDesign3ThemeFonts;
  color?: string;
}

const Text = ({ ref, variant = 'bodyMedium', color, children, style, ...props }: TextProps) => {
  const theme = useTheme();

  return (
    <Animated.Text
      ref={ref}
      style={[theme.fonts[variant], { color: color ?? theme.colors.onSurface }, style]}
      {...props}
    >
      {children}
    </Animated.Text>
  );
};

export default Text;
