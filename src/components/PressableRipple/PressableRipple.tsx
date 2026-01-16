import { GestureResponderEvent, Pressable, PressableProps, View } from 'react-native';
import Animated, { AnimatedProps, AnimatedRef } from 'react-native-reanimated';

import { useTheme, useThemeSettings } from '@/contexts/theme';
import useStateLayers from '@/hooks/useStateLayers';

export interface PressableRippleProps
  extends AnimatedProps<Omit<PressableProps, 'android_ripple'>> {
  ref?: AnimatedRef<View>;
  rippleColor?: string;
  rippleRadius?: number;
  borderless?: boolean;
  foreground?: boolean;
  disabled?: boolean;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
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

  return (
    <AnimatedPressable
      ref={ref}
      // Ripple is not working at the moment when foreground is set to false:
      // https://github.com/facebook/react-native/issues/52939
      android_ripple={{
        borderless: borderless,
        color: resolvedRippleColor,
        radius: rippleRadius,
        foreground: foreground,
      }}
      hitSlop={resolvedHitSlop}
      {...props}
    >
      {children}
    </AnimatedPressable>
  );
};

export default PressableRipple;
