import { BigSearch, Tile } from '../../../../bash-blocks'
import { hillData } from '../../../../../data'

export const WeatherSearchTile = ({
    funcSelect,
    funcInput,
    funcButton,
}: any) => (
    <Tile type="solid">
        <BigSearch
            funcInput={funcInput}
            funcButton={funcButton}
            placeholder="Search Hills"
            selects={[
                {
                    funcSelect: funcSelect,
                    content: hillData.munros,
                    placeholder: 'Munros',
                },
                {
                    funcSelect: funcSelect,
                    content: hillData.munros,
                    placeholder: 'Munro Tops',
                },
                {
                    funcSelect: funcSelect,
                    content: hillData.corbetts,
                    placeholder: 'Corbetts',
                },
                {
                    funcSelect: funcSelect,
                    content: hillData.corbetts,
                    placeholder: 'Corbett Tops',
                },
            ]}
        />
    </Tile>
)
