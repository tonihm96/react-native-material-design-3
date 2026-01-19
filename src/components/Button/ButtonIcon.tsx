import { use } from 'react';

import { useTheme } from '@/contexts/theme';

import Icon, { IconProps } from '../Icon';

import { getButtonIconSize, getVariantTextColor } from './Button.utils';
import ButtonContext from './ButtonContext';

export type ButtonIconProps = IconProps;

const ButtonIcon = ({ ...props }: ButtonIconProps) => {
  const theme = useTheme();
  const {
    disabled: buttonDisabled,
    size: buttonSize,
    variant: buttonVariant,
    selected: buttonSelected,
  } = use(ButtonContext);

  const color = getVariantTextColor(buttonVariant, theme.colors, buttonDisabled, buttonSelected);
  const iconSize = getButtonIconSize(buttonSize);

  return <Icon color={color} size={iconSize} {...props} />;
};

export default ButtonIcon;
