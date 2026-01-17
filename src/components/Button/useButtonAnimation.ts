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

interface UseButtonAnimationProps {
  selected: boolean;
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
}: UseButtonAnimationProps) => {
  const theme = useTheme();

  // We use a shared value to track the pressed state to ensure
  // it is faster than any round-trip through the React state system
  const isPressed = useSharedValue(false);
  const animatedBorderRadius = useSharedValue(defaultBorderRadius);

  const handlePressIn = useCallback(
    (e: GestureResponderEvent) => {
      if (!disabled) isPressed.value = true;
      onPressIn?.(e);
    },
    [onPressIn, disabled, isPressed]
  );

  const handlePressOut = useCallback(
    (e: GestureResponderEvent) => {
      if (!disabled) isPressed.value = false;
      onPressOut?.(e);
    },
    [onPressOut, disabled, isPressed]
  );

  useAnimatedReaction(
    () => ({
      pressed: isPressed.value,
      isSelected: selected,
      defaultRadius: defaultBorderRadius,
      selectedRadius: selectedBorderRadius,
      pressedRadius: pressedBorderRadius,
      springConfig: theme.motion.springs.standard.fast.spatial,
    }),
    (current, previous) => {
      if (previous === null) {
        return;
      }

      if (
        current.pressed === previous.pressed &&
        current.isSelected === previous.isSelected &&
        current.defaultRadius === previous.defaultRadius
      ) {
        return;
      }

      // Pressed > Selected > Default
      let targetRadius = current.defaultRadius;
      if (current.pressed) {
        targetRadius = current.pressedRadius;
      } else if (current.isSelected) {
        targetRadius = current.selectedRadius;
      }

      if (animatedBorderRadius.value !== targetRadius) {
        cancelAnimation(animatedBorderRadius);
        animatedBorderRadius.value = withSpring(targetRadius, current.springConfig);
      }
    },
    [
      isPressed,
      animatedBorderRadius,
      selected,
      defaultBorderRadius,
      selectedBorderRadius,
      pressedBorderRadius,
      theme.motion.springs.standard.fast.spatial,
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
