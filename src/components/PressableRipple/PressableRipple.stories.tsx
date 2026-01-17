import { StyleSheet, View } from 'react-native';
import { type Meta, type StoryObj } from '@storybook/react-native';
import { fn } from 'storybook/test';

import Text from '../Text';
import PressableRipple from './PressableRipple';

type Story = StoryObj<typeof meta>;

const meta = {
  component: PressableRipple,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  render: (args) => (
    <PressableRipple style={styles.pressable} {...args}>
      <Text>Pressable Ripple</Text>
    </PressableRipple>
  ),
  args: {
    onPress: fn(),
    onPressIn: fn(),
    onPressOut: fn(),
    onLongPress: fn(),
    onHoverIn: fn(),
    onHoverOut: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    rippleColor: {
      control: 'color',
      type: 'string',
    },
    rippleRadius: {
      type: 'number',
    },
    borderless: {
      type: 'boolean',
    },
    foreground: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof PressableRipple>;

export default meta;

export const Default = {} satisfies Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    padding: 16,
  },
});
