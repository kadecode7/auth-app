import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BackLink, Props } from './index';

export default {
  title: 'Navigation/Back Link',
  component: BackLink,
} as Meta<typeof BackLink>;

const Template: Story<Props> = (args) => <BackLink {...args} />;

export const Default = Template.bind({});
Default.args = {} as Props;
