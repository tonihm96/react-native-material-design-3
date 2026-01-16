import { use } from 'react';

import { useTheme } from '@/contexts/theme';
import { MaterialDesign3Colors } from '@/types/colors';
import { MaterialDesign3TypeScale } from '@/types/typeScale';

import Text, { TextProps } from '../Text';
import ButtonContext, { ButtonSize, ButtonVariant } from './ButtonContext';

export interface ButtonTextProps extends TextProps {}

const getVariantTextColor = (variant: ButtonVariant, colors: MaterialDesign3Colors) => {
  switch (variant) {
    case 'elevated':
      return colors.primary;
    case 'filled':
      return colors.onPrimary;
    case 'tonal':
      return colors.onSecondaryContainer;
    case 'outlined':
      return colors.onSurfaceVariant;
    case 'text':
      return colors.primary;
    default:
      return colors.onSurface;
  }
};

const getFontSizeStyle = (size: ButtonSize, fonts: MaterialDesign3TypeScale) => {
  switch (size) {
    case 'xsmall':
      return fonts.labelLarge;
    case 'small':
      return fonts.labelLarge;
    case 'medium':
      return fonts.titleMedium;
    case 'large':
      return fonts.headlineSmall;
    case 'xlarge':
      return fonts.headlineLarge;
    default:
      return fonts.labelLarge;
  }
};

const ButtonText = ({ children, style, ...props }: ButtonTextProps) => {
  const theme = useTheme();
  const buttonContext = use(ButtonContext);

  const buttonVariant = buttonContext?.variant ?? 'text';
  const buttonSize = buttonContext?.size ?? 'small';

  const textColor = getVariantTextColor(buttonVariant, theme.colors);
  const fontSizeStyle = getFontSizeStyle(buttonSize, theme.fonts);

  return (
    <Text color={textColor} style={[fontSizeStyle, style]} selectable={false} {...props}>
      {children}
    </Text>
  );
};

export default ButtonText;
