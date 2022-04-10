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

export const WithContent = Template.bind({});
WithContent.args = {
  children: 'Center',
} as Props;

export const Colorful = Template.bind({});
Colorful.args = {
  children: 'Or',
  dividerColor: '#ffb000',
} as Props;

export const TextColor = Template.bind({});
TextColor.args = {
  children: 'Divider',
  textColor: '#ffb000',
} as Props;

export const AlignText = Template.bind({});
AlignText.args = {
  children: 'Right',
  textAlign: 'right',
} as Props;

export const Variant = Template.bind({});
Variant.args = {
  children: 'Center',
  variant: 'middle',
} as Props;

export const Length = Template.bind({});
Length.args = {
  dividerLength: '2rem',
} as Props;

export const DividerType = Template.bind({});
DividerType.args = {
  dividerType: 'dashed',
} as Props;

export const Width = Template.bind({});
Width.args = {
  dividerWidth: 'thick',
} as Props;

export const Position = Template.bind({});
Position.args = {
  dividerPosition: {
    top: '10rem',
  },
} as Props;

export const Horizontal = Template.bind({});
Horizontal.args = {
  children: 'Center',
  orientation: 'horizontal',
} as Props;

export const Vertical = Template.bind({});
Vertical.args = {
  children: 'Center',
  orientation: 'vertical',
  flexItem: true,
} as Props;
Vertical.decorators = [
  (Story) => {
    const content = (
      <div>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
     Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
     Sed malesuada lobortis pretium.`}
      </div>
    );
    return (
      <div style={{ display: 'flex' }}>
        {content}
        <Story />
        {content}
      </div>
    );
  },
];
