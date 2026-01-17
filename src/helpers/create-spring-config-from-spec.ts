import { WithSpringConfig } from 'react-native-reanimated';

import { MaterialDesign3MotionSpring } from '@/types/motion';

const createSpringConfigFromSpec = ({
  stiffness,
  damping: dampingRatio,
}: MaterialDesign3MotionSpring): WithSpringConfig => {
  const mass = 1;

  // This formula comes from the link below:
  // https://en.wikipedia.org/wiki/Harmonic_oscillator#Damping_ratio_and_natural_frequency
  const physicalDampingCoefficient = 2 * dampingRatio * Math.sqrt(stiffness * mass);

  return {
    mass,
    stiffness,
    damping: physicalDampingCoefficient,
    overshootClamping: true, // MD3 allows overshoot
  };
};

export default createSpringConfigFromSpec;
