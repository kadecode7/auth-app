import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Link, Props } from './index';

export default {
  title: 'Navigation/Link',
  component: Link,
} as Meta<typeof Link>;

const Template: Story<Props> = (args) => (
  <Link {...args}>Forgot password?</Link>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://www.google.com',
} as Props;

export const ColorfulLink = Template.bind({});
ColorfulLink.args = {
  url: 'https://www.google.com',
  color: '#0ec238',
} as Props;

export const ButtonComponentLink = Template.bind({});
ButtonComponentLink.args = {
  component: 'button',
  onClick: () => {},
} as Props;

export const UnderlineNone = Template.bind({});
UnderlineNone.args = {
  url: 'https://www.google.com',
  underline: 'none',
} as Props;

export const UnderlineAlways = Template.bind({});
UnderlineAlways.args = {
  url: 'https://www.google.com',
  underline: 'always',
} as Props;

export const UnderlineHover = Template.bind({});
UnderlineHover.args = {
  url: 'https://www.google.com',
  underline: 'hover',
} as Props;

export const AnimatedLink = Template.bind({});
AnimatedLink.args = {
  url: 'https://www.google.com',
  animateLink: {
    animationBarColor: '#1976d2',
  },
} as Props;

export const VariantLink = Template.bind({});
VariantLink.args = {
  url: 'https://www.google.com',
  variant: 'h2',
} as Props;
