import React from 'react';
import { Story, Meta } from '@storybook/react';
import GoogleIcon from '@mui/icons-material/Google';

import { ButtonWithIcon as Button, Props } from './index';

export default {
  title: 'Button/Button With Icon',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: {
    backgroundColor: '#2D3748',
  },
} as Meta<typeof Button>;

const Template: Story<Props> = (args) => (
  <Button {...args}>
    <>
      <GoogleIcon />
      <p>Or sign-in with google</p>
    </>
  </Button>
);

export const IconLeft = Template.bind({});
IconLeft.args = {
  // backgroundColor: '#2C73EB',
  width: 'fit-content',
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconPosition: 'right',
  width: 'fit-content',
};

export const Large = Template.bind({});
Large.args = {
  width: '100%',
};

export const Medium = Template.bind({});
Medium.args = {
  width: '50%',
};

export const Small = Template.bind({});
Small.args = {
  width: '5%',
};
