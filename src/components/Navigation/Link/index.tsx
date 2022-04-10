import React from 'react';
import { Link as MuiLink } from '@mui/material';

type Variant =
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2';

export type Props = {
  /**
   * Link content
   */
  children: JSX.Element | string;
  /**
   * Link url
   */
  url?: string;
  /**
   * Link color
   */
  color?: string;
  /**
   * Controls when the link should have an underline
   */
  underline?: 'always' | 'hover' | 'none';
  /**
   * Link typography variant
   */
  variant?: Variant;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | JSX.Element;
  /**
   * activate animation link underline decoration
   */
  animateLink?: {
    animationBarColor: string;
  };
  /**
   * execute action when link is clicked
   */
  onClick?: () => void;
};

export const Link = ({
  children,
  url = '#',
  underline = 'none',
  animateLink,
  ...props
}: Props): JSX.Element => {
  const animateLinkStyle = animateLink
    ? {
        '&.MuiLink-root': {
          textDecoration: 'none',
          position: 'relative',
        },
        '&.MuiLink-root:before': {
          content: '""',
          position: 'absolute',
          display: 'block',
          width: '100%',
          height: '2px',
          bottom: -1.5,
          left: 0,
          backgroundColor: animateLink?.animationBarColor,
          transform: 'scaleX(0)',
          transformOrigin: 'top left',
          transition: 'transform 0.4s ease',
        },
        '&.MuiLink-root:hover::before': {
          transform: 'scaleX(1)',
        },
      }
    : null;
  return (
    <MuiLink
      href={url}
      underline={underline}
      {...props}
      sx={{ ...animateLinkStyle }}
    >
      {children}
    </MuiLink>
  );
};
