import { Ref, useMemo } from 'react';
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

  const colorStyle = useMemo(
    () => ({ color: color ?? theme.colors.onSurface }),
    [color, theme.colors.onSurface]
  );

  return (
    <Animated.Text ref={ref} style={[theme.fonts[variant], colorStyle, style]} {...props}>
      {children}
    </Animated.Text>
  );
};

export default Text;
