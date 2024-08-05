import { toUpperCase } from '../../../../utils';
import cx from 'classnames';
import styles from './typography.module.scss';
import ReactMarkdown from 'react-markdown';
import { createElement, FC } from 'react';
import { tagType } from './constants/tag-type';
import { TextStyle } from '../../reference';

export type TypographyProps = TextStyle;

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  element,
  color = 'white',
  boldFace,
  italicize,
  smallCaps,
  textDecoration = 'none',
  shadow,
  fontFamily = 'sansSerif',
  textAlign = 'inherit',
  paragraphMargins = false,
  markdown,
}) => {
  const classNames = cx(styles.typography, {
    [styles[`variant${toUpperCase(fontFamily)}${toUpperCase(variant)}`]]:
      !element,
    [styles[`variant${toUpperCase(fontFamily)}Bold`]]: boldFace,
    [styles[`variant${toUpperCase(fontFamily)}Italic`]]: italicize,
    [styles[`variant${toUpperCase(fontFamily)}BoldItalic`]]: Boolean(
      boldFace && italicize
    ),
    [styles.smallCaps]: smallCaps,
    [styles[
      `textDecoration${textDecoration ? toUpperCase(textDecoration) : 'None'}`
    ]]: textDecoration,
    [styles[`color${color ? toUpperCase(color) : 'DarkerGrey'}`]]: color,
    [styles.shadow]: shadow,
    [styles[`align${toUpperCase(textAlign)}`]]: textAlign,
    [styles.paragraphMargins]: paragraphMargins,
  });

  // TODO: write enrichMarkdown() for ' and ’, and ^{} and _{}, etc.
  // TODO: write tagMap for proper tag mapping
  return typeof children === 'string' && markdown ? (
    <ReactMarkdown className={classNames} linkTarget="_blank">
      {children}
    </ReactMarkdown>
  ) : (
    createElement(element ?? tagType[variant], {
      className: classNames,
      children,
    })
  );
};
