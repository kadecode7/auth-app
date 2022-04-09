import React from 'react';
import { Button } from '@mui/material';

import { Percentage } from '@src/types';

export type Props = {
  children: JSX.Element | string;
  backgroundColor: string;
  width?: Percentage | number | 'fit-content' | 'auto';
  iconPosition: 'left' | 'right';
};

export const ButtonWithIcon = ({
  children,
  backgroundColor,
  iconPosition = 'left',
  width = '100%',
  ...props
}: Props): JSX.Element => {
  const flexDirection = iconPosition === 'left' ? 'row' : 'row-reverse';
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor,
        width,
        display: 'flex',
        flexDirection,
        gap: '0.5rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
