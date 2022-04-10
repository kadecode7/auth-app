import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Divider, Props } from './index';

export default {
  title: 'Layout/Divider',
  component: Divider,
} as Meta<typeof Divider>;

const Template: Story<Props> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {} as Props;
