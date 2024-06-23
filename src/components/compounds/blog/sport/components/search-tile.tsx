import {
  faBiking,
  faMountainSun,
  faWalking,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useScreenWidth } from '../../../../../utils';
import { Tile, Button, Stack } from '../../../../bash-blocks';

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
}) => {
  const { isMobile } = useScreenWidth();

  return (
    <Tile type="solid">
      <Stack direction="horizontal" alignHorizontal="apart" wrap>
        <Button
          variant="clear"
          typeVariant="t2"
          typeColor={isRoadies ? 'lightBlue' : undefined}
          value="roadies"
          func={funcCategory}
          content={<FontAwesomeIcon icon={faBiking} />}
          subContent="Roadies"
          subContentTop={isMobile}
        />

        <Button
          variant="clear"
          typeVariant="t2"
          typeColor={isProjects ? 'lightBlue' : undefined}
          value="projects"
          func={funcCategory}
          content={<FontAwesomeIcon icon={faMountainSun} />}
          subContent="Projects"
          subContentTop={isMobile}
        />

        <Button
          variant="clear"
          typeVariant="t2"
          typeColor={isMiles ? 'lightBlue' : undefined}
          value="miles"
          func={funcCategory}
          content={<FontAwesomeIcon icon={faWalking} />}
          subContent="Miles"
          subContentTop={isMobile}
        />

        <Button
          variant="clear"
          typeVariant="t2"
          value="tennis"
          content={<FontAwesomeIcon icon={faTrophy} />}
          subContent="Tennis"
          subContentTop={isMobile}
        />
      </Stack>
    </Tile>
  );
};
