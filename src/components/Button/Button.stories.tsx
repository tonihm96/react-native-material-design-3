import { type Meta, type StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import * as PressableRippleStories from '../PressableRipple/PressableRipple.stories';

import Button, { ButtonProps } from './Button';

type Story = StoryObj<typeof meta>;

const meta = {
  component: Button,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    ...PressableRippleStories.default.args,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'filled', 'tonal', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
    selected: { control: 'boolean' },
    shape: {
      control: 'select',
      options: ['round', 'square'],
    },
    ...PressableRippleStories.default.argTypes,
  },
} satisfies Meta<typeof Button>;

export default meta;

//#region Elevated
export const XSmallElevated = {
  render: (args) => (
    <Button {...args} size='xsmall' variant='elevated'>
      <Button.Text>Elevated</Button.Text>
    </Button>
  ),
} satisfies Story;

export const SmallElevated = {
  render: (args) => (
    <Button {...args} size='small' variant='elevated'>
      <Button.Text>Elevated</Button.Text>
    </Button>
  ),
} satisfies Story;

export const MediumElevated = {
  render: (args) => (
    <Button {...args} size='medium' variant='elevated'>
      <Button.Text>Elevated</Button.Text>
    </Button>
  ),
} satisfies Story;

export const LargeElevated = {
  render: (args) => (
    <Button {...args} size='large' variant='elevated'>
      <Button.Text>Elevated</Button.Text>
    </Button>
  ),
} satisfies Story;

export const XLargeElevated = {
  render: (args) => (
    <Button {...args} size='xlarge' variant='elevated'>
      <Button.Text>Elevated</Button.Text>
    </Button>
  ),
} satisfies Story;
//#endregion

//#region Filled
export const XSmallFilled = {
  render: (args) => (
    <Button {...args} size='xsmall' variant='filled'>
      <Button.Text>Filled</Button.Text>
    </Button>
  ),
} satisfies Story;

export const SmallFilled = {
  render: (args) => (
    <Button {...args} size='small' variant='filled'>
      <Button.Text>Filled</Button.Text>
    </Button>
  ),
} satisfies Story;

export const MediumFilled = {
  render: (args) => (
    <Button {...args} size='medium' variant='filled'>
      <Button.Text>Filled</Button.Text>
    </Button>
  ),
} satisfies Story;

export const LargeFilled = {
  render: (args) => (
    <Button {...args} size='large' variant='filled'>
      <Button.Text>Filled</Button.Text>
    </Button>
  ),
} satisfies Story;

export const XLargeFilled = {
  render: (args) => (
    <Button {...args} size='xlarge' variant='filled'>
      <Button.Text>Filled</Button.Text>
    </Button>
  ),
} satisfies Story;
//#endregion

//#region Tonal
export const XSmallTonal = {
  render: (args) => (
    <Button {...args} size='xsmall' variant='tonal'>
      <Button.Text>Tonal</Button.Text>
    </Button>
  ),
} satisfies Story;

export const SmallTonal = {
  render: (args) => (
    <Button {...args} size='small' variant='tonal'>
      <Button.Text>Tonal</Button.Text>
    </Button>
  ),
} satisfies Story;

export const MediumTonal = {
  render: (args) => (
    <Button {...args} size='medium' variant='tonal'>
      <Button.Text>Tonal</Button.Text>
    </Button>
  ),
} satisfies Story;

export const LargeTonal = {
  render: (args) => (
    <Button {...args} size='large' variant='tonal'>
      <Button.Text>Tonal</Button.Text>
    </Button>
  ),
} satisfies Story;

export const XLargeTonal = {
  render: (args) => (
    <Button {...args} size='xlarge' variant='tonal'>
      <Button.Text>Tonal</Button.Text>
    </Button>
  ),
} satisfies Story;
//#endregion

//#region Tonal
export const XSmallOutlined = {
  render: (args) => (
    <Button {...args} size='xsmall' variant='outlined'>
      <Button.Text>Outlined</Button.Text>
    </Button>
  ),
} satisfies Story;

export const SmallOutlined = {
  render: (args) => (
    <Button {...args} size='small' variant='outlined'>
      <Button.Text>Outlined</Button.Text>
    </Button>
  ),
} satisfies Story;

export const MediumOutlined = {
  render: (args) => (
    <Button {...args} size='medium' variant='outlined'>
      <Button.Text>Outlined</Button.Text>
    </Button>
  ),
} satisfies Story;

export const LargeOutlined = {
  render: (args) => (
    <Button {...args} size='large' variant='outlined'>
      <Button.Text>Outlined</Button.Text>
    </Button>
  ),
} satisfies Story;

export const XLargeOutlined = {
  render: (args) => (
    <Button {...args} size='xlarge' variant='outlined'>
      <Button.Text>Outlined</Button.Text>
    </Button>
  ),
} satisfies Story;
//#endregion

//#region Text
export const XSmallText = {
  render: (args) => (
    <Button {...args} size='xsmall' variant='text'>
      <Button.Text>Text</Button.Text>
    </Button>
  ),
} satisfies Story;

export const SmallText = {
  render: (args) => (
    <Button {...args} size='small' variant='text'>
      <Button.Text>Text</Button.Text>
    </Button>
  ),
} satisfies Story;

export const MediumText = {
  render: (args) => (
    <Button {...args} size='medium' variant='text'>
      <Button.Text>Text</Button.Text>
    </Button>
  ),
} satisfies Story;

export const LargeText = {
  render: (args) => (
    <Button {...args} size='large' variant='text'>
      <Button.Text>Text</Button.Text>
    </Button>
  ),
} satisfies Story;

export const XLargeText = {
  render: (args) => (
    <Button {...args} size='xlarge' variant='text'>
      <Button.Text>Text</Button.Text>
    </Button>
  ),
} satisfies Story;
//#endregion

const SelectableButton = (args: ButtonProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <Button
      {...args}
      selected={selected}
      onPress={() => setSelected((prev) => !prev)}
      variant='filled'
      size='medium'
    >
      <Button.Text>Button</Button.Text>
    </Button>
  );
};

export const Selectable = {
  render: (args) => <SelectableButton {...args} />,
} satisfies Story;

export const WithIcon = {
  render: (args) => (
    <Button {...args}>
      <Button.Icon icon='plus' />
      <Button.Text>With icon</Button.Text>
    </Button>
  ),
} satisfies Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
