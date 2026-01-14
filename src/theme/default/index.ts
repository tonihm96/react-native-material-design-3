import { MaterialDesign3Theme } from '@/types/theme';

import { darkMaterialDesign3Colors, lightMaterialDesign3Colors } from './colors';

import elevation from './elevation';
import fonts from './fonts';
import motion from './motion';
import shapes from './shapes';
import spacing from './spacing';
import stateLayers from './stateLayers';

const themeWithoutColors: Omit<MaterialDesign3Theme, 'colors'> = {
  elevation,
  motion,
  stateLayers,
  fonts,
  shapes,
  spacing,
};

export const materialDesign3DefaultLightTheme: MaterialDesign3Theme = {
  ...themeWithoutColors,
  colors: lightMaterialDesign3Colors,
};

export const materialDesign3DefaultDarkTheme: MaterialDesign3Theme = {
  ...themeWithoutColors,
  colors: darkMaterialDesign3Colors,
};
