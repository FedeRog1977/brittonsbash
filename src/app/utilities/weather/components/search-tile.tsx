import { BigSearch, Tile } from '../../../../components';
import { FC } from 'react';
import { brittonsBashContentFacade } from '../../../../implementations';

// TODO: all facade uses should be in their respective page.tsx's
const hills = await brittonsBashContentFacade.getHills();

type SearchTileProps = {
  funcInput: (e: any) => void;
  funcButton: () => void;
  funcSelect: (e: any) => void;
};

export const SearchTile: FC<SearchTileProps> = ({ funcInput, funcButton, funcSelect }) => (
  <Tile type="solid">
    <BigSearch
      funcInput={funcInput}
      funcButton={funcButton}
      placeholder="Search Hills"
      selects={[
        {
          funcSelect: funcSelect,
          content: hills.munros,
          placeholder: 'Munros',
        },
        {
          funcSelect: funcSelect,
          content: hills.munros,
          placeholder: 'Munro Tops',
        },
        {
          funcSelect: funcSelect,
          content: hills.corbetts,
          placeholder: 'Corbetts',
        },
        {
          funcSelect: funcSelect,
          content: hills.corbetts,
          placeholder: 'Corbett Tops',
        },
      ]}
    />
  </Tile>
);
