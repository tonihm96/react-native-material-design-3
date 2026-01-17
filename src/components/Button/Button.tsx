import { useTheme } from '@/contexts/theme';

import PressableRipple, { PressableRippleProps } from '../PressableRipple';

import styles from './Button.styles';
import {
  getPressedShapeSizeBorderRadius,
  getSelectedShapeSizeBorderRadius,
  getShapeSizeBorderRadius,
  getSizeBorderWidth,
  getVariantBackgroundColor,
} from './Button.utils';
import ButtonContext, {
  type ButtonShape,
  type ButtonSize,
  type ButtonVariant,
} from './ButtonContext';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';
import useButtonAnimation from './useButtonAnimation';

export interface ButtonProps extends PressableRippleProps {
  shape?: ButtonShape;
  variant?: ButtonVariant;
  size?: ButtonSize;
  selected?: boolean;
}

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

  const buttonSizeStyle = styles[size];

  const backgroundColor = getVariantBackgroundColor(variant, theme.colors, disabled, selected);
  const borderWidth = getSizeBorderWidth(size);

  const defaultBorderRadius = getShapeSizeBorderRadius(
    shape,
    size,
    theme.shapes,
    buttonSizeStyle.height
  );
  const selectedBorderRadius = getSelectedShapeSizeBorderRadius(size, theme.shapes);
  const pressedBorderRadius = getPressedShapeSizeBorderRadius(size, theme.shapes);

  const { animatedStyle, handlePressIn, handlePressOut } = useButtonAnimation({
    defaultBorderRadius,
    pressedBorderRadius,
    selected,
    selectedBorderRadius,
    disabled,
    onPressIn,
    onPressOut,
  });

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
          buttonSizeStyle,
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

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export default Button;
