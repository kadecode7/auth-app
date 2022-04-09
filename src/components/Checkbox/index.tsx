import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { Percentage } from '@src/types';

export type Props = {
  ariaLabel: string;
  checked: boolean;
  labelPlacement?: 'bottom' | 'top' | 'start' | 'end';
  defaultChecked?: boolean;
  required?: boolean;
  size?: 'small' | 'medium';
  fontSize?: Percentage | number | string;
  colors?: {
    uncheckedColor: string;
    checkedColor: string;
  };
  label?: JSX.Element | string;
  icons?: {
    icon: JSX.Element;
    checkedIcon: JSX.Element;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({
  fontSize, // ok
  colors, // ok
  label, // ok
  ariaLabel, // ok
  icons, // ok
  labelPlacement = 'end',
  handleChange,
  ...props
}: Props): JSX.Element => {
  const createCheckbox = (
    <MuiCheckbox
      inputProps={{ 'aria-label': ariaLabel }}
      onChange={handleChange}
      {...icons}
      {...props}
      sx={{
        color: colors?.uncheckedColor,
        '& .MuiSvgIcon-root': { fontSize },
        '&.Mui-checked': {
          color: colors?.checkedColor,
        },
      }}
    />
  );
  return (
    <FormControlLabel
      labelPlacement={labelPlacement}
      control={createCheckbox}
      label={label}
    />
  );
};
