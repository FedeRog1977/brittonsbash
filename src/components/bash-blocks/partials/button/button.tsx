import styles from './button.module.scss';
import cx from 'classnames';
import { toUpperCase } from '../../../../utils';
import { Stack, Typography } from '../../basics';
import { FC, ReactElement } from 'react';
import { TextStyle, Url } from '../../reference';
import { GridTemp } from '../../basics/grid-temp/grid';
import { GridItemTemp } from '../../basics/grid-temp/grid-item';

export type ButtonProps = {
  variant?: 'default' | 'clear' | 'solid' | 'inverse';
  typeVariant?: TextStyle['variant'];
  typeColor?: TextStyle['color'];
  typeFontFamily?: TextStyle['fontFamily'];
  content: string | ReactElement;
  subContent?: string | ReactElement;
  subContentTop?: boolean;
  icon?: ReactElement;
  value?: string;
  func?: (() => void) | ((e: any) => void);
  link?: Url;
  width?: 'default' | 'quarter' | 'half' | 'full';
  padding?: 'default' | 'coarse';
  transition?: boolean;
};

export const Button: FC<ButtonProps> = ({
  variant = 'default',
  typeVariant = 'body',
  typeColor = 'white',
  typeFontFamily,
  content,
  subContent,
  subContentTop,
  icon,
  value,
  func,
  link,
  width = 'default',
  padding = 'default',
  transition,
}) => {
  const classNames = cx(
    styles.button,
    styles[`variant${toUpperCase(variant)}`],
    styles[`width${toUpperCase(width)}`],
    styles[`padding${toUpperCase(padding)}`],
    {
      [styles.transition]: transition,
    }
  );

  if (typeof content === 'string' && link)
    return (
      <Typography variant={typeVariant} markdown>
        {`[${content}](${link.url})`}
      </Typography>
    );

  return (
    <button className={classNames} onClick={func} value={value}>
      <GridTemp
        alignHorizontal="between"
        alignVertical="center"
        spacing={icon ? 'xs' : 'none'}
      >
        <GridItemTemp xs={icon ? 2 : 12}>
          <Stack
            direction={subContentTop ? 'vertical' : 'horizontal'}
            alignHorizontal={icon ? 'left' : 'center'}
            alignVertical="center"
            spacing="xs"
          >
            {subContent ? (
              <Typography variant="body" color="lightGrey" textAlign="right">
                {subContent}
              </Typography>
            ) : null}

            <Typography
              variant={typeVariant}
              color={typeColor}
              fontFamily={typeFontFamily}
              textAlign="left"
            >
              {content}
            </Typography>
          </Stack>
        </GridItemTemp>

        {icon ? (
          <GridItemTemp xs={1}>
            <Typography variant="footnote" color={typeColor} textAlign="right">
              {icon}
            </Typography>
          </GridItemTemp>
        ) : null}
      </GridTemp>
    </button>
  );
};
