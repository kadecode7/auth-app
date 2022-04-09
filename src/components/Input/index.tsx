import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { Percentage } from '../../types';

export type Props = {
  helperText?: JSX.Element | string;
  startAdornment?: JSX.Element | string;
  endAdornment?: JSX.Element | string;
  inputType: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  ariaLabel: string;
  width?: Percentage | number | 'fit-content' | 'auto';
};

export const Input = ({
  helperText = '',
  width = 'auto',
  startAdornment,
  endAdornment,
  inputType,
  ariaLabel,
  handleChange,
  value,
  ...props
}: Props): JSX.Element => {
  return (
    <FormControl
      sx={{
        m: 1,
        width,
        '& label.Mui-focused': {
          color: 'green',
        },
      }}
      variant="outlined"
      {...props}
    >
      <FormHelperText
        sx={{
          color: '#696F79',
          fontWeight: '500',
          fontSize: '16px',
          m: 0,
          mb: '0.5rem',
        }}
        id={`outlined-${ariaLabel}-helper-text`}
      >
        {helperText}
      </FormHelperText>
      <TextField
        id={`outlined-adornment-${ariaLabel}`}
        type={inputType}
        value={value}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ),
        }}
        inputProps={{
          'aria-label': ariaLabel,
        }}
        sx={{
          '& label.Mui-focused': {
            color: '#1565D8',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#1565D8',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: value ? '#1565D8' : '#E5E5E5',
            },
            '&:hover fieldset': {
              borderColor: '#1565D8',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1565D8',
            },
          },
        }}
      />
    </FormControl>
  );
};
