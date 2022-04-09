import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { LengthUnits } from '@src/types';

export type Props = {
  /**
   * checkbox current state
   */
  checked: boolean;
  /**
   * Manage checkbox state (checked/unchecked)
   */
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * a string value that labels an interactive element
   */
  ariaLabel: string;
  /**
   * checkbox label
   */
  label?: JSX.Element | string;
  /**
   * checkbox label position
   */
  labelPlacement?: 'bottom' | 'top' | 'start' | 'end';
  /**
   * checked checkbox by default
   */
  defaultChecked?: boolean;
  /**
   * define if checkbox is require or not
   */
  required?: boolean;
  /**
   * custom size for checkbox
   */
  fontSize?: LengthUnits;
  /**
   * material ui checkbox size
   */
  size?: 'small' | 'medium';
  /**
   * checkbox color when checked or unchecked
   */
  colors?: {
    uncheckedColor: string;
    checkedColor: string;
  };
  /**
   * checkbox icons when checked or unchecked
   */
  icons?: {
    icon: JSX.Element;
    checkedIcon: JSX.Element;
  };
};

export const Checkbox = ({
  fontSize,
  colors,
  label,
  ariaLabel,
  icons,
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
