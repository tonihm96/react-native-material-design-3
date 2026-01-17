import { MaterialDesign3Colors } from '@/types/colors';
import { MaterialDesign3Shapes } from '@/types/shapes';
import { MaterialDesign3TypeScale } from '@/types/typeScale';

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

export const getVariantTextColor = (variant: ButtonVariant, colors: MaterialDesign3Colors) => {
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

export const getFontSizeStyle = (size: ButtonSize, fonts: MaterialDesign3TypeScale) => {
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

export const getButtonIconSize = (size: ButtonSize) => {
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
