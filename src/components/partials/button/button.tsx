import styles from './button.module.scss';
import cx from 'classnames';
import { toUpperCase } from '../../../utils';
import { Flex, Typography } from '../../basics';
import { FC, ReactElement } from 'react';
import { TextStyle } from '../../reference/types';
import { Grid } from '../../basics/grid/grid';
import { GridItem } from '../../basics/grid/grid-item';
import { Url } from '../../../utils/types';

export type ButtonProps = {
  variant?: 'default' | 'clear' | 'solid' | 'solidDark' | 'inverse';
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
        {`[${content}](${link.content})`}
      </Typography>
    );

  return (
    <button className={classNames} onClick={func} value={value}>
      <Grid justifyContent="between" alignItems="center" spacing={icon ? 'xs' : 'none'}>
        <GridItem xs={icon ? 6 : 12}>
          <Flex
            direction={subContentTop ? 'vertical' : 'horizontal'}
            alignHorizontal={icon ? 'left' : 'center'}
            alignVertical="center"
            gap="xs"
          >
            {subContent ? (
              <Typography variant="body" color="lightGrey" textAlign="center">
                {subContent}
              </Typography>
            ) : null}

            <Typography
              variant={typeVariant}
              color={typeColor}
              fontFamily={typeFontFamily}
              textAlign="center"
            >
              {content}
            </Typography>
          </Flex>
        </GridItem>

        {icon ? (
          <GridItem xs={1}>
            <Typography variant="footnote" color={typeColor} textAlign="right">
              {icon}
            </Typography>
          </GridItem>
        ) : null}
      </Grid>
    </button>
  );
};
