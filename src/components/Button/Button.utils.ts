import { MaterialDesign3Colors } from '@/types/colors';
import { MaterialDesign3Shapes } from '@/types/shapes';
import { MaterialDesign3TypeScale } from '@/types/typeScale';

import { ButtonShape, ButtonSize, ButtonVariant } from './ButtonContext';
import Color from '@/utils/color';

export const getVariantBackgroundColor = (
  variant: ButtonVariant,
  colors: MaterialDesign3Colors,
  disabled: boolean,
  selected?: boolean
) => {
  switch (variant) {
    case 'elevated': {
      if (disabled) {
        return new Color(colors.onSurface).alpha(0.1);
      }
      if (selected !== undefined) {
        return selected ? colors.primary : colors.surfaceContainerLow;
      }
      return colors.surfaceContainerLow;
    }
    case 'filled': {
      if (disabled) {
        return new Color(colors.onSurface).alpha(0.1);
      }
      if (selected !== undefined) {
        return selected ? colors.primary : colors.surfaceContainer;
      }
      return colors.primary;
    }
    case 'tonal': {
      if (disabled) {
        return new Color(colors.onSurface).alpha(0.1);
      }
      if (selected !== undefined) {
        return selected ? colors.secondary : colors.secondaryContainer;
      }
      return colors.secondaryContainer;
    }
    case 'outlined': {
      if (disabled) {
        return new Color(colors.onSurface).alpha(0.1);
      }
      if (selected !== undefined) {
        return selected ? colors.inverseSurface : undefined;
      }
      return undefined;
    }
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

export const getVariantTextColor = (
  variant: ButtonVariant,
  colors: MaterialDesign3Colors,
  disabled: boolean,
  selected?: boolean
) => {
  switch (variant) {
    case 'elevated': {
      if (disabled) {
        return new Color(colors.onSurface).alpha(0.38);
      }
      if (selected !== undefined) {
        return selected ? colors.onPrimary : colors.primary;
      }
      return colors.primary;
    }
    case 'filled': {
      if (disabled) {
        return new Color(colors.onSurface).alpha(0.38);
      }
      if (selected !== undefined) {
        return selected ? colors.onPrimary : colors.onSurfaceVariant;
      }
      return colors.onPrimary;
    }
    case 'tonal': {
      if (disabled) {
        return new Color(colors.onSurface).alpha(0.38);
      }
      if (selected !== undefined) {
        return selected ? colors.onSecondary : colors.onSecondaryContainer;
      }
      return colors.onSecondaryContainer;
    }
    case 'outlined': {
      if (disabled) {
        return new Color(colors.onSurface).alpha(0.38);
      }
      if (selected !== undefined) {
        return selected ? colors.inverseOnSurface : colors.onSurfaceVariant;
      }
      return colors.onSurfaceVariant;
    }
    case 'text':
      return disabled ? new Color(colors.onSurface).alpha(0.38) : colors.primary;
    default:
      return disabled ? new Color(colors.onSurface).alpha(0.38) : colors.onSurface;
  }
};

export const getVariantBorderColor = (
  variant: ButtonVariant,
  colors: MaterialDesign3Colors,
  disabled: boolean,
  selected?: boolean
) => {
  switch (variant) {
    case 'outlined': {
      if (disabled) {
        return selected ? 'transparent' : colors.outlineVariant;
      }
      if (selected !== undefined) {
        return selected ? colors.inverseSurface : colors.outlineVariant;
      }
      return colors.outlineVariant;
    }
    // No outline for other variants
    default:
      return undefined;
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
