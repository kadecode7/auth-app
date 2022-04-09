import React from 'react';
import { Button } from '@mui/material';

import { Percentage } from '@src/types';

export type Props = {
  children: JSX.Element | string;
  backgroundColor: string;
  variant: 'contained' | 'outlined' | 'text';
  width?: Percentage | number | 'fit-content';
};

const BasicButton = ({
  children,
  backgroundColor,
  variant = 'contained',
  width = '100%',
  ...props
}: Props): JSX.Element => {
  backgroundColor = variant === 'contained' ? backgroundColor : '';
  return (
    <Button variant={variant} sx={{ backgroundColor, width }} {...props}>
      {children}
    </Button>
  );
};

export { BasicButton };
