import { ReactElement, ReactNode } from 'react';
import { AlignHorizontal, Color, Url } from '.';

export type TextStyle = {
  variant:
    | 't1'
    | 't2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'caption'
    | 'footnote'
    | 'tiny';
  children?: string | ReactElement | ReactNode | Element;
  color?: Color;
  inline?: boolean;
  boldFace?: boolean;
  italicize?: boolean;
  smallCaps?: boolean;
  textDecoration?: 'none' | 'overline' | 'underline' | 'lineThrough';
  link?: Url;
  shadow?: boolean;
  fontFamily?: 'serif' | 'sansSerif' | 'instagram' | 'sport' | 'miami';
  textAlign?: AlignHorizontal | 'inherit' | 'justify';
  paragraphMargins?: boolean;
};
