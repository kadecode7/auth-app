import React from 'react';
import { Divider as MuiDivider } from '@mui/material';
import { LengthUnits } from '@src/types';

export type Props = {
  /**
   * divider content
   */
  children?: JSX.Element | string;
  /**
   * divider orientation
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * divider content element alignment
   */
  textAlign?: 'center' | 'left' | 'right';
  /**
   * divider variant
   */
  variant?: 'fullWidth' | 'inset' | 'middle';

  /**
   * If true, a vertical divider will have the correct height when used in flex container.
   */
  flexItem?: boolean;

  /**
   * divider content element color
   */
  textColor?: string;
  /**
   * divider color
   */
  dividerColor?: string;
  /**
   * divider length
   */
  dividerLength?: LengthUnits | 'auto';
  /**
   * divider line style
   */
  dividerType?: 'solid' | 'dotted' | 'inset' | 'dashed' | 'groove' | 'none';
  /**
   * divider height
   */
  dividerHeight?: 'thin' | 'thick' | 'medium' | 'auto' | LengthUnits;
  /**
   * divider position (margin)
   */
  dividerPosition?: {
    left?: LengthUnits;
    right?: LengthUnits;
    top?: LengthUnits;
    bottom?: LengthUnits;
  };
};

export const Divider = ({
  children,
  textColor,
  orientation,
  dividerColor,
  dividerHeight,
  dividerType,
  dividerLength,
  dividerPosition,
  ...props
}: Props): JSX.Element => {
  const dividerStyle = children
    ? {
        '&.MuiDivider-root::before, &.MuiDivider-root::after': {
          //* Divider with text
          //* borderTop: `5px solid green` => example
          borderTopWidth: dividerHeight,
          borderTopStyle: dividerType,
          borderTopColor: dividerColor,
          marginBottom: dividerPosition?.bottom,
          marginTop: dividerPosition?.top,
          marginLeft: dividerPosition?.left,
          marginRight: dividerPosition?.right,
        },
      }
    : {
        '&.MuiDivider-root': {
          //* Divider without text
          //* border: `5px solid green` => example
          borderBottomWidth: dividerHeight,
          borderStyle: dividerType,
          borderColor: dividerColor,
          marginBottom: dividerPosition?.bottom,
          marginTop: dividerPosition?.top,
          marginLeft: dividerPosition?.left,
          marginRight: dividerPosition?.right,
        },
      };

  return (
    <MuiDivider
      orientation={orientation}
      sx={{
        color: textColor,
        width: dividerLength,
        ...dividerStyle,
      }}
      {...props}
    >
      {children}
    </MuiDivider>
  );
};
