import React from 'react';
import { Button } from '@mui/material';

import { LengthUnits } from '@src/types';

export type Props = {
  children: JSX.Element | string;
  backgroundColor: string;
  variant: 'contained' | 'outlined' | 'text';
  width?: LengthUnits | 'fit-content';
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
