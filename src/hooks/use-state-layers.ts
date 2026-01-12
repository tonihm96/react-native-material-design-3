import { useMemo } from 'react';

import { useTheme } from '@/contexts/theme';
import { Colord } from 'colord';

export const useStateLayers = (color: string) => {
  const theme = useTheme();
  const colorParser = useMemo(() => new Colord(color), [color]);

  return useMemo(
    () => ({
      hover: colorParser.alpha(theme.stateLayers.hover).toHex(),
      focus: colorParser.alpha(theme.stateLayers.focus).toHex(),
      press: colorParser.alpha(theme.stateLayers.press).toHex(),
      drag: colorParser.alpha(theme.stateLayers.drag).toHex(),
    }),
    [
      colorParser,
      theme.stateLayers.drag,
      theme.stateLayers.focus,
      theme.stateLayers.hover,
      theme.stateLayers.press,
    ]
  );
};
