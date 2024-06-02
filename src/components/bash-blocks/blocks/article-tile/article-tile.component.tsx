import { FC } from 'react';
import { Tile, TileProps, Typography } from '../../basics';
import { getContent } from './formatters/get-content';
import { Section } from './types/section.type';
import { TextStyle } from '../../reference';

export type ArticleTileProps = {
  type?: TileProps['type'];
  gap?: TileProps['gap'];
  heading?: string;
  subHeading?: string;
  textAlign?: TextStyle['textAlign'];
  sections: Section[];
};

export const ArticleTile: FC<ArticleTileProps> = ({
  type = 'clear',
  gap,
  heading,
  subHeading,
  textAlign = 'center',
  sections,
}) => (
  <Tile type={type} gap={gap}>
    {subHeading ? (
      <Typography variant="h2" textAlign={textAlign}>
        {subHeading}
      </Typography>
    ) : null}
    {heading ? (
      <Typography variant="h1" textAlign={textAlign} paragraphMargins>
        {heading}
      </Typography>
    ) : null}
    {sections.map((section) => getContent(section))}
  </Tile>
);
