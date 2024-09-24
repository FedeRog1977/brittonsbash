import { BigSearch, Tile } from '../../../../bash-blocks';
import { compileHills } from '../../../../../utils';
import { FC } from 'react';

type SearchTile = {
  funcInput: (e: any) => void;
  funcButton: () => void;
  funcSelect: (e: any) => void;
};

export const SearchTile: FC<SearchTile> = ({ funcInput, funcButton, funcSelect }) => {
  const hills = compileHills();

  return (
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
};
