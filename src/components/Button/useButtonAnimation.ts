import { useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import {
  cancelAnimation,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { useTheme } from '@/contexts/theme';

interface ButtonAnimationProps {
  selected?: boolean;
  defaultBorderRadius: number;
  selectedBorderRadius: number;
  pressedBorderRadius: number;
  onPressIn?: (e: GestureResponderEvent) => void;
  onPressOut?: (e: GestureResponderEvent) => void;
  disabled?: boolean;
}

const useButtonAnimation = ({
  defaultBorderRadius,
  pressedBorderRadius,
  selected,
  selectedBorderRadius,
  disabled,
  onPressIn,
  onPressOut,
}: ButtonAnimationProps) => {
  const theme = useTheme();

  // Prevent copying the entire theme object into the worklet
  const springConfig = theme.motion.springs.standard.fast.spatial;

  // Use a shared value to track the pressed state to ensure
  // it is faster than any extra round-trip through the JS thread
  const pressed = useSharedValue(false);
  const animatedBorderRadius = useSharedValue(defaultBorderRadius);

  const handlePressIn = useCallback(
    (e: GestureResponderEvent) => {
      if (!disabled) {
        pressed.value = true;
      }
      onPressIn?.(e);
    },
    [onPressIn, disabled, pressed]
  );

  const handlePressOut = useCallback(
    (e: GestureResponderEvent) => {
      if (!disabled) {
        pressed.value = false;
      }
      onPressOut?.(e);
    },
    [onPressOut, disabled, pressed]
  );

  useAnimatedReaction(
    () => ({
      pressed: pressed.value,
      selected,
      defaultBorderRadius,
      pressedBorderRadius,
      selectedBorderRadius,
    }),
    (current, previous) => {
      if (
        current.pressed === previous?.pressed &&
        current.selected === previous?.selected &&
        current.defaultBorderRadius === previous?.defaultBorderRadius &&
        current.pressedBorderRadius === previous?.pressedBorderRadius &&
        current.selectedBorderRadius === previous?.selectedBorderRadius
      ) {
        return;
      }

      // Pressed > Selected > Default
      let targetRadius = current.defaultBorderRadius;
      if (current.pressed) {
        targetRadius = current.pressedBorderRadius;
      } else if (current.selected) {
        targetRadius = current.selectedBorderRadius;
      }

      if (animatedBorderRadius.value !== targetRadius) {
        // Only cancel the animation if it's running when assigning a new one
        cancelAnimation(animatedBorderRadius);
        animatedBorderRadius.value = withSpring(targetRadius, springConfig);
      }
    },
    [
      pressed,
      animatedBorderRadius,
      selected,
      defaultBorderRadius,
      selectedBorderRadius,
      pressedBorderRadius,
      springConfig,
    ]
  );

  const animatedStyle = useAnimatedStyle(
    () => ({ borderRadius: animatedBorderRadius.value }),
    [animatedBorderRadius]
  );

  return {
    animatedStyle,
    handlePressIn,
    handlePressOut,
  };
};

export default useButtonAnimation;
