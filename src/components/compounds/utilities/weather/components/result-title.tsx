import { FC, ReactElement } from 'react';
import { useScreenWidth } from '../../../../../utils';
import { Spacing, Tile, Typography } from '../../../../bash-blocks';

type ResultTileProps = {
  title: string;
  subTitle: ReactElement;
  result: ReactElement;
};

export const ResultTitle: FC<ResultTileProps> = ({
  title,
  subTitle,
  result,
}) => {
  const { isMobile } = useScreenWidth();

  return (
    <Tile type="solid">
      <Spacing mB={isMobile ? 7.5 : 15}>
        <Typography variant="h1" textAlign="center">
          {title}
        </Typography>
        <Typography variant="h2" color="mediumGrey" textAlign="center">
          {subTitle}
        </Typography>
      </Spacing>
      {result}
    </Tile>
  );
};
