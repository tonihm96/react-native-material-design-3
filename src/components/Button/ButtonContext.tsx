import { createContext } from 'react';

export type ButtonVariant = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';

export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type ButtonShape = 'round' | 'square';

export interface ButtonContextProps {
  variant: ButtonVariant;
  size: ButtonSize;
  shape: ButtonShape;
  selected?: boolean;
  disabled: boolean;
}

const defaultButtonContext: ButtonContextProps = {
  variant: 'text',
  size: 'small',
  shape: 'round',
  disabled: false,
};

const ButtonContext = createContext<ButtonContextProps>(defaultButtonContext);

export default ButtonContext;
