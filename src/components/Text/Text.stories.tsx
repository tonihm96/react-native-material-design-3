import { type Meta, type StoryObj } from '@storybook/react-native';

import Text from './Text';
import { StyleSheet, View } from 'react-native';

type Story = StoryObj<typeof meta>;

const meta = {
  component: Text,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;

export const Default = {
  args: {
    variant: 'bodyMedium',
    children: 'Default Text',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'displayLarge',
        'displayMedium',
        'displaySmall',
        'headlineLarge',
        'headlineMedium',
        'headlineSmall',
        'titleLarge',
        'titleMedium',
        'titleSmall',
        'bodyLarge',
        'bodyMedium',
        'bodySmall',
        'labelLarge',
        'labelMedium',
        'labelSmall',
      ],
    },
  },
} satisfies Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
