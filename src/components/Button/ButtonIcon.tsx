import { use } from 'react';

import { useTheme } from '@/contexts/theme';

import Icon, { IconProps } from '../Icon';

import { getButtonIconSize, getVariantTextColor } from './Button.utils';
import ButtonContext from './ButtonContext';

export type ButtonIconProps = IconProps;

const ButtonIcon = ({ ...props }: ButtonIconProps) => {
  const theme = useTheme();
  const buttonContext = use(ButtonContext);

  const buttonVariant = buttonContext?.variant ?? 'text';
  const buttonSize = buttonContext?.size ?? 'small';
  const buttonDisabled = buttonContext?.disabled ?? false;
  const buttonSelected = buttonContext?.selected ?? false;

  const color = getVariantTextColor(buttonVariant, theme.colors, buttonDisabled, buttonSelected);
  const size = getButtonIconSize(buttonSize);

  return <Icon color={color} size={size} {...props} />;
};

export default ButtonIcon;
