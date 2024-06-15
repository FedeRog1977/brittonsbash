import { FC } from 'react';
import { Stack, Tile, TileProps, Typography } from '../../basics';
import { getContent } from './utils/get-content';
import { Section } from './types/section';
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

    <Stack direction="vertical" spacing="md">
      {sections.map((section) => getContent(section))}
    </Stack>
  </Tile>
);
