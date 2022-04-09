import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Checkbox, Props } from './index';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { LengthUnits } from '../../types';

export default {
  title: 'Checkbox/checkbox',
  component: Checkbox,
  args: {
    checked: false,
    handleChange: () => {},
  },
} as Meta<typeof Checkbox>;

const Template: Story<Props> = (args: Props) => <Checkbox {...args} />;

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  ariaLabel: 'basic-checkbox',
  handleChange: () => {},
  checked: true,
} as Props;

export const UncheckedCheckbox = Template.bind({});
UncheckedCheckbox.args = {
  ariaLabel: 'basic-checkbox',
} as Props;

export const CheckboxWithLabel = Template.bind({});
CheckboxWithLabel.args = {
  label: 'Click here',
  ariaLabel: 'label-checkbox',
} as Props;

export const ColorCheckbox = Template.bind({});
ColorCheckbox.args = {
  ariaLabel: 'color-checkbox',
  colors: {
    uncheckedColor: '#c2b90e',
    checkedColor: '#ede20e',
  },
} as Props;

export const CheckboxWithIcon = Template.bind({});
CheckboxWithIcon.args = {
  ariaLabel: 'icon-checkbox',
  icons: {
    icon: <BookmarkBorderIcon />,
    checkedIcon: <BookmarkIcon />,
  },
} as Props;

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  ariaLabel: 'icon-checkbox',
  fontSize: '5rem' as LengthUnits,
} as Props;
