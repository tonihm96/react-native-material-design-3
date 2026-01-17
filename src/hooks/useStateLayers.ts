import { useMemo } from 'react';

import { useTheme } from '@/contexts/theme';
import Color from '@/utils/color';

const useStateLayers = (color: string) => {
  const theme = useTheme();

  return useMemo(() => {
    const parsedColor = new Color(color);
    return {
      hover: parsedColor.alpha(theme.stateLayers.hover),
      focus: parsedColor.alpha(theme.stateLayers.focus),
      press: parsedColor.alpha(theme.stateLayers.press),
      drag: parsedColor.alpha(theme.stateLayers.drag),
    };
  }, [
    color,
    theme.stateLayers.drag,
    theme.stateLayers.focus,
    theme.stateLayers.hover,
    theme.stateLayers.press,
  ]);
};

export default useStateLayers;
