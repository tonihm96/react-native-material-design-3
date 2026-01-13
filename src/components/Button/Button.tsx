import { GestureResponderEvent, StyleSheet } from 'react-native';

import { useTheme } from '@/contexts/theme';
import { MaterialDesign3Colors } from '@/types/colors';
import { MaterialDesign3Shapes } from '@/types/shapes';

import PressableRipple, { PressableRippleProps } from '../PressableRipple';
import ButtonContext, {
  type ButtonShape,
  type ButtonSize,
  type ButtonVariant,
} from './ButtonContext';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useCallback } from 'react';

export interface ButtonProps extends PressableRippleProps {
  shape?: ButtonShape;
  variant?: ButtonVariant;
  size?: ButtonSize;
  selected?: boolean;
}

const getVariantBackgroundColor = (
  variant: ButtonVariant,
  colors: MaterialDesign3Colors,
  selected: boolean,
  disabled: boolean
) => {
  switch (variant) {
    case 'elevated':
      return colors.surfaceContainerLow;
    case 'filled':
      return colors.primary;
    case 'tonal':
      return colors.secondaryContainer;
    case 'outlined':
      return undefined;
    case 'text':
      return undefined;
  }
};

const getSizeBorderWidth = (size: ButtonSize) => {
  switch (size) {
    case 'xsmall':
      return 1;
    case 'small':
      return 1;
    case 'medium':
      return 1;
    case 'large':
      return 2;
    case 'xlarge':
      return 3;
  }
};

const getShapeSizeBorderRadius = (
  shape: ButtonShape,
  size: ButtonSize,
  shapes: MaterialDesign3Shapes,
  height: number
) => {
  if (shape === 'round') {
    return height / 2;
  }

  switch (size) {
    case 'xsmall':
      return shapes.medium;
    case 'small':
      return shapes.medium;
    case 'medium':
      return shapes.large;
    case 'large':
      return shapes.extraLarge;
    case 'xlarge':
      return shapes.extraLarge;
  }
};

const getPressedShapeSizeBorderRadius = (size: ButtonSize, shapes: MaterialDesign3Shapes) => {
  switch (size) {
    case 'xsmall':
      return shapes.small;
    case 'small':
      return shapes.small;
    case 'medium':
      return shapes.medium;
    case 'large':
      return shapes.large;
    case 'xlarge':
      return shapes.large;
  }
};

const Button = ({
  children,
  variant = 'text',
  size = 'small',
  selected = false,
  shape = 'round',
  disabled = false,
  style,
  onPressIn,
  onPressOut,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const sizeStyle = styles[size];

  const backgroundColor = getVariantBackgroundColor(variant, theme.colors, selected, disabled);
  const borderWidth = getSizeBorderWidth(size);
  const borderRadius = getShapeSizeBorderRadius(shape, size, theme.shapes, sizeStyle.height);
  const pressedBorderRadius = getPressedShapeSizeBorderRadius(size, theme.shapes);

  const pressTransition = useSharedValue(0);

  const handlePressIn = useCallback(
    (e: GestureResponderEvent) => {
      // handle animation first, then call onPressIn
      pressTransition.value = withTiming(1);
      onPressIn?.(e);
    },
    [onPressIn, pressTransition]
  );

  const handlePressOut = useCallback(
    (e: GestureResponderEvent) => {
      // handle animation first, then call onPressOut
      pressTransition.value = withTiming(0);
      onPressOut?.(e);
    },
    [onPressOut, pressTransition]
  );

  const animatedBorderRadius = useDerivedValue(
    () =>
      interpolate(
        pressTransition.value,
        [0, 1],
        [borderRadius, pressedBorderRadius],
        Extrapolation.CLAMP
      ),
    [borderRadius, pressTransition, pressedBorderRadius]
  );

  const animatedStyle = useAnimatedStyle(
    () => ({ borderRadius: animatedBorderRadius.value }),
    [animatedBorderRadius]
  );

  return (
    <ButtonContext value={{ variant, size, selected, disabled }}>
      <PressableRipple
        // Here we force a re-render when backgroundColor changes
        // This should be fixed sometime soon by the React Native team
        // There is an open issue about it:
        // https://github.com/facebook/react-native/issues/54298
        key={backgroundColor}
        style={[
          styles.container,
          sizeStyle,
          { backgroundColor },
          variant === 'outlined' && {
            borderWidth,
            borderColor: theme.colors.outlineVariant,
          },
          variant === 'elevated' && {
            elevation: theme.elevation[1],
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: theme.elevation[1] },
            shadowRadius: theme.elevation[1],
          },
          animatedStyle,
          style,
        ]}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...props}
      >
        {children}
      </PressableRipple>
    </ButtonContext>
  );
};

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

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export default Button;
