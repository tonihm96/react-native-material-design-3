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

  const color = getVariantTextColor(buttonVariant, theme.colors);
  const size = getButtonIconSize(buttonSize);

  return <Icon color={color} size={size} {...props} />;
};

export default ButtonIcon;
