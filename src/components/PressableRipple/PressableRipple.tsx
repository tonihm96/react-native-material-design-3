import { useMemo } from 'react';
import { PressableAndroidRippleConfig, Pressable, PressableProps, View } from 'react-native';
import Animated, { AnimatedProps, AnimatedRef } from 'react-native-reanimated';

import { useTheme, useThemeSettings } from '@/contexts/theme';
import { useStateLayers } from '@/hooks/use-state-layers';

export interface PressableRippleProps
  extends AnimatedProps<Omit<PressableProps, 'android_ripple'>> {
  ref?: AnimatedRef<View>;
  rippleColor?: string;
  rippleRadius?: number;
  borderless?: boolean;
  foreground?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PressableRipple = ({
  ref,
  children,
  rippleColor,
  borderless,
  rippleRadius,
  foreground,
  hitSlop,
  ...props
}: PressableRippleProps) => {
  const theme = useTheme();
  const themeSettings = useThemeSettings();
  const stateLayers = useStateLayers(theme.colors.onSurface);

  const resolvedHitSlop = hitSlop ?? themeSettings.hitSlop;
  const resolvedRippleColor = rippleColor ?? stateLayers.press;

  const androidRippleConfig = useMemo<PressableAndroidRippleConfig>(
    () => ({
      borderless: borderless,
      color: resolvedRippleColor,
      radius: rippleRadius,
      foreground: foreground,
    }),
    [borderless, foreground, resolvedRippleColor, rippleRadius]
  );

  return (
    <AnimatedPressable
      ref={ref}
      android_ripple={androidRippleConfig}
      hitSlop={resolvedHitSlop}
      {...props}
    >
      {children}
    </AnimatedPressable>
  );
};

export default PressableRipple;
