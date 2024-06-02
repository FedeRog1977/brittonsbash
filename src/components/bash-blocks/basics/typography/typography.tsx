import { toUpperCase } from '../../../../utils';
import cx from 'classnames';
import styles from './typography.module.scss';
import Markdown from 'markdown-to-jsx';
import { createElement, FC } from 'react';
import { tagType } from './constants/tag-type';
import { TextStyle } from '../../reference';

export type TypographyProps = TextStyle;

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
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
  const classNames = cx(
    styles.typography,
    styles[`variant${toUpperCase(fontFamily)}${toUpperCase(variant)}`],
    {
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
    }
  );

  // if (link)
  //   return (
  //     <div className={classNames}>
  //       <a
  //         href={link.url}
  //         target={link.newTab ? '_blank' : undefined}
  //         rel={link.newTab ? 'noreferrer' : undefined}
  //       >
  //         {parsedText}
  //       </a>
  //     </div>
  //   );

  return typeof children === 'string' && markdown ? (
    <Markdown className={classNames} linkTarget="_blank" linkRel="noreferrer">
      {children}
    </Markdown>
  ) : (
    createElement(tagType[variant], {
      className: classNames,
      children,
    })
  );
};
