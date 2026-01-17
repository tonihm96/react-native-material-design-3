import { use } from 'react';

import { useTheme } from '@/contexts/theme';

import Text, { TextProps } from '../Text';

import { getFontSizeStyle, getVariantTextColor } from './Button.utils';
import ButtonContext from './ButtonContext';

export type ButtonTextProps = TextProps;

const ButtonText = ({ children, style, ...props }: ButtonTextProps) => {
  const theme = useTheme();
  const buttonContext = use(ButtonContext);

  const buttonVariant = buttonContext?.variant ?? 'text';
  const buttonSize = buttonContext?.size ?? 'small';
  const buttonDisabled = buttonContext?.disabled ?? false;
  const buttonSelected = buttonContext?.selected;

  const textColor = getVariantTextColor(
    buttonVariant,
    theme.colors,
    buttonDisabled,
    buttonSelected
  );
  const fontSizeStyle = getFontSizeStyle(buttonSize, theme.fonts);

  return (
    <Text color={textColor} style={[fontSizeStyle, style]} selectable={false} {...props}>
      {children}
    </Text>
  );
};

export default ButtonText;
