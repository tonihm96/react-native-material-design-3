import { use } from 'react';

import { useTheme } from '@/contexts/theme';
import { MaterialDesign3Colors } from '@/types/colors';

import Icon, { IconProps } from '../Icon';
import ButtonContext, { ButtonSize, ButtonVariant } from './ButtonContext';

export type ButtonIconProps = IconProps;

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

const getSize = (size: ButtonSize) => {
  switch (size) {
    case 'xsmall':
      return 16;
    case 'small':
      return 16;
    case 'medium':
      return 16;
    case 'large':
      return 16;
    case 'xlarge':
      return 16;
    default:
      return 16;
  }
};

const ButtonIcon = ({ ...props }: ButtonIconProps) => {
  const theme = useTheme();
  const buttonContext = use(ButtonContext);

  const buttonVariant = buttonContext?.variant ?? 'text';
  const buttonSize = buttonContext?.size ?? 'small';

  const color = getVariantTextColor(buttonVariant, theme.colors);
  const size = getSize(buttonSize);

  return <Icon color={color} size={size} {...props} />;
};

export default ButtonIcon;
