import { type Meta, type StoryObj } from '@storybook/react-native';

import Icon from './Icon';
import { StyleSheet, View } from 'react-native';

type Story = StoryObj<typeof meta>;

const meta = {
  component: Icon,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Icon>;

export default meta;

export const Default = {
  args: {
    icon: 'home',
    size: 48,
  },
  argTypes: {
    icon: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'number', min: 8, max: 128, step: 1 },
    },
    color: {
      control: 'color',
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
