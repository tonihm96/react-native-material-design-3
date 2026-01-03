// customizable
import { CustomColors, MaterialDesign3Colors } from './colors';
import { CustomShapes, MaterialDesign3Shapes } from './shapes';
import { CustomSpacing, MaterialDesign3Spacing } from './spacing';
import { CustomTypeScale, MaterialDesign3TypeScale } from './type-scale';

// static
import { MaterialDesign3Elevation } from './elevation';
import { MaterialDesign3Motion } from './motion';
import { MaterialDesign3StateLayers } from './state-layers';

export type MaterialDesign3ThemeColors = MaterialDesign3Colors & CustomColors;
export type MaterialDesign3ThemeFonts = MaterialDesign3TypeScale & CustomTypeScale;
export type MaterialDesign3ThemeShapes = MaterialDesign3Shapes & CustomShapes;
export type MaterialDesign3ThemeSpacing = MaterialDesign3Spacing & CustomSpacing;

export interface MaterialDesign3Theme {
  // customizable
  colors: MaterialDesign3ThemeColors;
  fonts: MaterialDesign3ThemeFonts;
  shapes: MaterialDesign3ThemeShapes;
  spacing: MaterialDesign3ThemeSpacing;
  // static
  elevation: MaterialDesign3Elevation;
  motion: MaterialDesign3Motion;
  stateLayers: MaterialDesign3StateLayers;
}
