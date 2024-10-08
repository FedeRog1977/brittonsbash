import { FC } from 'react';
import { Flex, Tile, TileProps, Typography } from '../../basics';
import { getContent } from './utils/get-content';
import { Section } from './types/section';
import { TextStyle } from '../../reference/types';

export type ArticleTileProps = {
  type?: TileProps['type'];
  heading?: string;
  subHeading?: string;
  textAlign?: TextStyle['textAlign'];
  sections: Section[];
};

export const ArticleTile: FC<ArticleTileProps> = ({
  type = 'clear',
  heading,
  subHeading,
  textAlign = 'center',
  sections,
}) => (
  <Tile type={type}>
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

    <Flex direction="vertical" gap="md">
      {sections.map((section) => getContent(section))}
    </Flex>
  </Tile>
);
