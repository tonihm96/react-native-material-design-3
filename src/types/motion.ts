import { WithSpringConfig } from 'react-native-reanimated';

export interface MaterialDesign3MotionSpring {
  damping: number;
  stiffness: number;
}

export interface MaterialDesign3MotionSpringMovements {
  spatial: WithSpringConfig;
  effects: WithSpringConfig;
}

export interface MaterialDesign3MotionSpringSpeeds {
  fast: MaterialDesign3MotionSpringMovements;
  default: MaterialDesign3MotionSpringMovements;
  slow: MaterialDesign3MotionSpringMovements;
}

export interface MaterialDesign3MotionSpringsSchemes {
  standard: MaterialDesign3MotionSpringSpeeds;
  expressive: MaterialDesign3MotionSpringSpeeds;
}

export interface MaterialDesign3MotionEasing {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface MaterialDesign3MotionEasings {
  emphasized: MaterialDesign3MotionEasing;
  emphasizedAccelerate: MaterialDesign3MotionEasing;
  emphasizedDecelerate: MaterialDesign3MotionEasing;
  standard: MaterialDesign3MotionEasing;
  standardAccelerate: MaterialDesign3MotionEasing;
  standardDecelerate: MaterialDesign3MotionEasing;
  linear: MaterialDesign3MotionEasing;
}

export interface MaterialDesign3MotionDurations {
  short1: number;
  short2: number;
  short3: number;
  short4: number;
  medium1: number;
  medium2: number;
  medium3: number;
  medium4: number;
  long1: number;
  long2: number;
  long3: number;
  long4: number;
  extraLong1: number;
  extraLong2: number;
  extraLong3: number;
  extraLong4: number;
}

export interface MaterialDesign3Motion {
  springs: MaterialDesign3MotionSpringsSchemes;
  easings: MaterialDesign3MotionEasings;
  durations: MaterialDesign3MotionDurations;
}
