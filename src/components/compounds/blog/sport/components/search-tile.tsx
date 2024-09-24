import { faBiking, faMountainSun, faWalking, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Tile, Button, Flex, FlexItem } from '../../../../bash-blocks/index.js';
import { isMobile } from '../../../../../utils/index.js';

export type SearchTileProps = {
  funcCategory: (e: any) => void;
  isRoadies: boolean;
  isProjects: boolean;
  isMiles: boolean;
};

export const SearchTile: FC<SearchTileProps> = ({
  funcCategory,
  isRoadies,
  isProjects,
  isMiles,
}) => (
  <Tile type="solid">
    <Flex direction="horizontal" alignHorizontal="apart" wrap>
      <FlexItem grow>
        <Button
          variant="clear"
          typeVariant="t2"
          typeColor={isRoadies ? 'lightBlue' : undefined}
          value="roadies"
          func={funcCategory}
          content={<FontAwesomeIcon icon={faBiking} />}
          subContent="Roadies"
          subContentTop={isMobile()}
          width="full"
        />
      </FlexItem>

      <FlexItem grow>
        <Button
          variant="clear"
          typeVariant="t2"
          typeColor={isProjects ? 'lightBlue' : undefined}
          value="projects"
          func={funcCategory}
          content={<FontAwesomeIcon icon={faMountainSun} />}
          subContent="Projects"
          subContentTop={isMobile()}
          width="full"
        />
      </FlexItem>

      <FlexItem grow>
        <Button
          variant="clear"
          typeVariant="t2"
          typeColor={isMiles ? 'lightBlue' : undefined}
          value="miles"
          func={funcCategory}
          content={<FontAwesomeIcon icon={faWalking} />}
          subContent="Miles"
          subContentTop={isMobile()}
          width="full"
        />
      </FlexItem>

      <FlexItem grow>
        <Button
          variant="clear"
          typeVariant="t2"
          value="tennis"
          content={<FontAwesomeIcon icon={faTrophy} />}
          subContent="Tennis"
          subContentTop={isMobile()}
          width="full"
        />
      </FlexItem>
    </Flex>
  </Tile>
);
