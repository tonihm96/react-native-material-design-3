import { WithSpringConfig } from 'react-native-reanimated';

import { MaterialDesign3MotionSpring } from '@/types/motion';

const createSpringConfigFromSpec = ({
  stiffness,
  damping: dampingRatio,
}: MaterialDesign3MotionSpring): WithSpringConfig => {
  const mass = 1;

  const physicalDampingCoefficient = 2 * dampingRatio * Math.sqrt(stiffness * mass);

  return {
    mass,
    stiffness,
    damping: physicalDampingCoefficient,
    overshootClamping: true, // MD3 allows overshoot
  };
};

export default createSpringConfigFromSpec;
