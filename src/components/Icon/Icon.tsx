import { ReactNode, useMemo } from 'react';
import { Image, ImageProps, ImageSourcePropType, Platform, TextProps } from 'react-native';
import { useTheme, useThemeSettings } from '@/contexts/theme';

type RenderIconFunction = (props: IconProps) => ReactNode;

interface SharedIconProps {
  size?: number;
  color?: string;
}

interface FontIconProps extends SharedIconProps, TextProps {
  icon: string | RenderIconFunction;
}

interface ImageIconProps extends SharedIconProps, Omit<ImageProps, 'source'> {
  icon: ImageSourcePropType;
}

export type IconProps = FontIconProps | ImageIconProps;

const DEFAULT_ICON_SIZE = 24;

const imageExtensionRegex = /\.(bmp|jpg|jpeg|png|gif|svg)$/i;

const isImageSource = (icon: unknown): icon is ImageSourcePropType => {
  if (typeof icon === 'string') {
    return false;
  }
  // Default React Native image source types
  if (typeof icon === 'object' && icon !== null && 'uri' in icon) {
    return typeof icon.uri === 'string';
  }
  // Check for local image require (number) or module
  if (typeof icon === 'number') {
    return true;
  }
  // Check for string paths ending with image extensions on web
  if (Platform.OS === 'web' && typeof icon === 'string') {
    return icon.startsWith('data:image') || imageExtensionRegex.test(icon);
  }
  // Unknown
  return false;
};

const ImageIcon = ({ icon, color, size, style, ...props }: ImageIconProps) => {
  if (!isImageSource(icon)) throw new Error('Icon is not a valid image source');

  const imageIconStyle = useMemo(
    () => ({ width: size, height: size, tintColor: color }),
    [color, size]
  );
  // Ensure style is a stable reference
  const resolvedStyle = useMemo(() => [imageIconStyle, style], [imageIconStyle, style]);

  return <Image source={icon} style={resolvedStyle} {...props} />;
};

const Icon = ({ icon, size = DEFAULT_ICON_SIZE, color, ...props }: IconProps) => {
  const theme = useTheme();
  const themeSettings = useThemeSettings();

  const resolvedColor = color ?? theme.colors.onSurface;

  if (isImageSource(icon)) {
    return (
      <ImageIcon {...(props as ImageIconProps)} icon={icon} size={size} color={resolvedColor} />
    );
  }

  if (typeof icon === 'function') {
    return icon({ icon, size, color: resolvedColor, ...props });
  }

  if (themeSettings.icon) {
    // Use the icon provided by the theme settings
    return themeSettings.icon({ icon, size, color: resolvedColor, ...props });
  }

  console.warn('Icon provider not configured in ThemeSettings');
  return null;
};

export default Icon;
