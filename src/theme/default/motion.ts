import createSpringConfigFromSpec from '@/helpers/create-spring-config-from-spec';
import { MaterialDesign3Motion } from '@/types/motion';

const motion: MaterialDesign3Motion = {
  easings: {
    standard: { x0: 0.2, y0: 0, x1: 0, y1: 1 },
    standardAccelerate: { x0: 0.3, y0: 0, x1: 1, y1: 1 },
    standardDecelerate: { x0: 0, y0: 0, x1: 0, y1: 1 },
    emphasized: { x0: 0.2, y0: 0, x1: 0, y1: 1 },
    emphasizedDecelerate: { x0: 0.05, y0: 0.7, x1: 0.1, y1: 1 },
    emphasizedAccelerate: { x0: 0.3, y0: 0, x1: 0.8, y1: 0.15 },
    linear: { x0: 0, y0: 0, x1: 1, y1: 1 },
  },
  durations: {
    short1: 50,
    short2: 100,
    short3: 150,
    short4: 200,
    medium1: 250,
    medium2: 300,
    medium3: 350,
    medium4: 400,
    long1: 450,
    long2: 500,
    long3: 550,
    long4: 600,
    extraLong1: 700,
    extraLong2: 800,
    extraLong3: 900,
    extraLong4: 1000,
  },
  springs: {
    standard: {
      fast: {
        spatial: createSpringConfigFromSpec({ damping: 0.9, stiffness: 1400 }),
        effects: createSpringConfigFromSpec({ damping: 1, stiffness: 3800 }),
      },
      default: {
        spatial: createSpringConfigFromSpec({ damping: 0.9, stiffness: 700 }),
        effects: createSpringConfigFromSpec({ damping: 1, stiffness: 1600 }),
      },
      slow: {
        spatial: createSpringConfigFromSpec({ damping: 0.9, stiffness: 300 }),
        effects: createSpringConfigFromSpec({ damping: 1, stiffness: 800 }),
      },
    },
    expressive: {
      fast: {
        spatial: createSpringConfigFromSpec({ damping: 0.6, stiffness: 800 }),
        effects: createSpringConfigFromSpec({ damping: 1, stiffness: 3800 }),
      },
      default: {
        spatial: createSpringConfigFromSpec({ damping: 0.8, stiffness: 380 }),
        effects: createSpringConfigFromSpec({ damping: 1, stiffness: 1600 }),
      },
      slow: {
        spatial: createSpringConfigFromSpec({ damping: 0.8, stiffness: 200 }),
        effects: createSpringConfigFromSpec({ damping: 1, stiffness: 800 }),
      },
    },
  },
};

export default motion;
