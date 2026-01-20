import { useTheme } from '@/contexts/theme';
import { ButtonShape, ButtonSize } from './ButtonContext';
import { MaterialDesign3ThemeShapes } from '@/types/theme';

interface ButtonStateShapesProps {
  shape: ButtonShape;
  size: ButtonSize;
  buttonHeight: number;
}

const defaultBorderRadiusKeyByShapeSize: Record<ButtonSize, keyof MaterialDesign3ThemeShapes> = {
  xsmall: 'medium',
  small: 'medium',
  medium: 'large',
  large: 'extraLarge',
  xlarge: 'extraLarge',
};

const selectedBorderRadiusKeyByShapeSize: Record<ButtonSize, keyof MaterialDesign3ThemeShapes> = {
  xsmall: 'medium',
  small: 'medium',
  medium: 'large',
  large: 'extraLarge',
  xlarge: 'extraLarge',
};

const pressedBorderRadiusKeyByShapeSize: Record<ButtonSize, keyof MaterialDesign3ThemeShapes> = {
  xsmall: 'small',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'large',
};

const useButtonStateShapes = ({ shape, size, buttonHeight }: ButtonStateShapesProps) => {
  const theme = useTheme();

  const defaultBorderRadiusKey = defaultBorderRadiusKeyByShapeSize[size];
  const selectedBorderRadiusKey = selectedBorderRadiusKeyByShapeSize[size];
  const pressedBorderRadiusKey = pressedBorderRadiusKeyByShapeSize[size];

  return {
    defaultBorderRadius:
      shape === 'round' ? buttonHeight / 2 : theme.shapes[defaultBorderRadiusKey],
    selectedBorderRadius: theme.shapes[selectedBorderRadiusKey],
    pressedBorderRadius: theme.shapes[pressedBorderRadiusKey],
  };
};

export default useButtonStateShapes;
