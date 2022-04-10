import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BasicButton as Button, Props } from './index';

export default {
  title: 'Button/Basic Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: {
    backgroundColor: '#2C73EB',
  },
} as Meta<typeof Button>;

const Template: Story<Props> = (args) => <Button {...args}>Login now</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Width = Template.bind({});
Width.args = {
  width: '50%',
};

export const FitContent = Template.bind({});
FitContent.args = {
  width: 'fit-content',
};
