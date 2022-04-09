import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Checkbox, Props } from './index';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default {
  title: 'Checkbox/checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: Story<Props> = (args: Props) => <Checkbox {...args} />;

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  ariaLabel: 'basic-checkbox',
  handleChange: () => {},
  checked: true,
} as Props;

export const uncheckedCheckbox = Template.bind({});
uncheckedCheckbox.args = {
  ariaLabel: 'basic-checkbox',
  handleChange: () => {},
  checked: false,
} as Props;

export const CheckboxWithLabel = Template.bind({});
CheckboxWithLabel.args = {
  label: 'Click here',
  ariaLabel: 'label-checkbox',
  handleChange: () => {},
  checked: false,
} as Props;

export const ColorCheckbox = Template.bind({});
ColorCheckbox.args = {
  ariaLabel: 'color-checkbox',
  colors: {
    uncheckedColor: '#c2b90e',
    checkedColor: '#ede20e',
  },
  handleChange: () => {},
  checked: false,
} as Props;

export const CheckboxWithIcon = Template.bind({});
CheckboxWithIcon.args = {
  ariaLabel: 'icon-checkbox',
  icons: {
    icon: <BookmarkBorderIcon />,
    checkedIcon: <BookmarkIcon />,
  },
  handleChange: () => {},
  checked: false,
} as Props;

export const largeCheckbox = Template.bind({});
largeCheckbox.args = {
  ariaLabel: 'icon-checkbox',
  fontSize: '5rem',
  handleChange: () => {},
  checked: false,
} as Props;
