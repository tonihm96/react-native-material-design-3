import { MaterialDesign3Colors } from '@/types/colors';
import { MaterialDesign3Shapes } from '@/types/shapes';

import { ButtonVariant, ButtonSize, ButtonShape } from './ButtonContext';

export const getVariantBackgroundColor = (
  variant: ButtonVariant,
  colors: MaterialDesign3Colors,
  disabled: boolean,
  selected?: boolean
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

export const getSizeBorderWidth = (size: ButtonSize) => {
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

export const getShapeSizeBorderRadius = (
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

export const getSelectedShapeSizeBorderRadius = (
  size: ButtonSize,
  shapes: MaterialDesign3Shapes
) => {
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

export const getPressedShapeSizeBorderRadius = (
  size: ButtonSize,
  shapes: MaterialDesign3Shapes
) => {
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
