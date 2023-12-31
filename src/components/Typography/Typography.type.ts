import { ReactNode } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption';

export interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  fontSize?: string;
  lineHeight?: string;
  className?: string;
}
