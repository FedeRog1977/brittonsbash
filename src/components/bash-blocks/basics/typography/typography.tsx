import { toUpperCase } from '../../../../scripts';
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
  inline,
  boldFace,
  italicize,
  smallCaps,
  textDecoration = 'none',
  link,
  shadow,
  fontFamily = 'sansSerif',
  textAlign = 'inherit',
  paragraphMargins = false,
}) => {
  const classNamesContainer = cx({
    [styles.inline]: inline,
    [styles.paragraphMargins]: paragraphMargins,
    [styles[`align${toUpperCase(textAlign)}`]]: textAlign,
  });

  const classNamesText = cx(
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
    }
  );

  // const parsedTagMappedText = createElement(tagType[type], {
  //     className: classNamesText,
  //     children,
  // })

  const parsedText =
    typeof children === 'string' ? (
      <Markdown>{children}</Markdown>
    ) : (
      <>{children}</>
    );

  if (link)
    return (
      <div className={classNamesContainer}>
        <div className={classNamesText}>
          <a
            href={link.url}
            target={link.newTab ? '_blank' : undefined}
            rel={link.newTab ? 'noreferrer' : undefined}
          >
            {parsedText}
          </a>
        </div>
      </div>
    );

  return (
    <div className={classNamesContainer}>
      <div className={classNamesText}>{parsedText}</div>
    </div>
  );
};
