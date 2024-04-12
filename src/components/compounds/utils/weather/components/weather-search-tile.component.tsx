import { BigSearch, Tile } from '../../../../bash-blocks'
import { compileHills } from '../../../../../scripts'

export const WeatherSearchTile = ({
    funcSelect,
    funcInput,
    funcButton,
}: any) => {
    const hills = compileHills()

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
    )
}
