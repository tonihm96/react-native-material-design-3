import { MaterialDesign3Colors } from '@/types/colors';
import { MaterialDesign3TypeScale } from '@/types/typeScale';

import Color from '@/utils/color';
import { ButtonSize, ButtonVariant } from './ButtonContext';

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
    default:
      throw new Error(`Unsupported button variant: ${variant}`);
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
      throw new Error(`Unsupported button variant: ${variant}`);
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
    default:
      throw new Error(`Unsupported button size: ${size}`);
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
      throw new Error(`Unsupported button size: ${size}`);
  }
};

export const getButtonIconSize = (size: ButtonSize) => {
  switch (size) {
    case 'xsmall':
      return 20;
    case 'small':
      return 20;
    case 'medium':
      return 24;
    case 'large':
      return 32;
    case 'xlarge':
      return 40;
    default:
      throw new Error(`Unsupported button size: ${size}`);
  }
};
