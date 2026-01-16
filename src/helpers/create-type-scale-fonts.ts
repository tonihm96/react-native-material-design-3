import { MaterialDesign3TypeScale } from '@/types/typeScale';
import defaultFonts from '@/theme/default/fonts';

const createMaterialDesign3TypeScaleFonts = <T extends MaterialDesign3TypeScale>(
  setup?: (defaults: MaterialDesign3TypeScale) => T
): T => {
  return setup ? setup(defaultFonts) : (defaultFonts as T);
};

export default createMaterialDesign3TypeScaleFonts;
