/*** */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Input, Props } from './index';

export default {
  title: 'InputField/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: Story<Props> = (args) => <Input {...args} />;

export const PasswordShow = Template.bind({});
PasswordShow.args = {
  // backgroundColor: '#2C73EB',
  helperText: 'Password',
  inputType: 'text',
  ariaLabel: 'password',
  value: 'super-strong-password',
  handleChange: () => {},
  endAdornment: (
    <IconButton
      aria-label="toggle password visibility"
      onClick={() => {}}
      onMouseDown={() => {}}
      edge="end"
    >
      {false ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  ),
} as Props;

export const PasswordHide = Template.bind({});
PasswordHide.args = {
  // backgroundColor: '#2C73EB',
  helperText: 'Password',
  inputType: 'password',
  ariaLabel: 'password',
  value: 'super-strong-password',
  handleChange: () => {},
  endAdornment: (
    <IconButton
      aria-label="toggle password visibility"
      onClick={() => {}}
      onMouseDown={() => {}}
      edge="end"
    >
      {true ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  ),
} as Props;

export const EndAndStartAdornment = Template.bind({});
EndAndStartAdornment.args = {
  helperText: 'Password',
  inputType: 'password',
  ariaLabel: 'password',
  value: 'super-strong-password',
  handleChange: () => {},
  startAdornment: <LockIcon />,
  endAdornment: (
    <IconButton
      aria-label="toggle password visibility"
      onClick={() => {}}
      onMouseDown={() => {}}
      edge="end"
    >
      {true ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  ),
} as Props;

export const BasicInput = Template.bind({});
BasicInput.args = {
  inputType: 'text',
  ariaLabel: 'text',
  value: 'hello world',
  handleChange: () => {},
} as Props;

export const LargeInput = Template.bind({});
LargeInput.args = {
  inputType: 'text',
  ariaLabel: 'text',
  value: 'hello world',
  width: '100%',
  handleChange: () => {},
} as Props;

export const BasicInputWithHelperText = Template.bind({});
BasicInputWithHelperText.args = {
  helperText: 'Helper Text',
  inputType: 'text',
  ariaLabel: 'text',
  value: 'hello world',
  handleChange: () => {},
} as Props;

export const StartAbornment = Template.bind({});
StartAbornment.args = {
  helperText: 'Text',
  inputType: 'text',
  ariaLabel: 'text',
  value: 'hello world',
  handleChange: () => {},
  startAdornment: <LockIcon />,
} as Props;

export const EndAbornment = Template.bind({});
EndAbornment.args = {
  // backgroundColor: '#2C73EB',
  helperText: 'Text',
  inputType: 'text',
  ariaLabel: 'text',
  value: 'hello world',
  handleChange: () => {},
  endAdornment: <LockIcon />,
} as Props;
