import { MaterialDesign3TypeScale } from '@/types/type-scale';
import defaultFonts from '@/theme/default/fonts';

export const createMaterialDesign3TypeScaleFonts = <T extends MaterialDesign3TypeScale>(
  setup?: (defaults: MaterialDesign3TypeScale) => T
): T => {
  return setup ? setup(defaultFonts) : (defaultFonts as T);
};
