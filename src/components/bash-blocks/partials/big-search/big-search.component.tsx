import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import {
    generateUniqueKey,
    getGridAlign,
    useScreenWidth,
} from '../../../../scripts'
import { Grid, Search, SearchList, Spacing } from '../../basics'
import { Button } from '../button'
import { SearchProps } from '../../basics'

export type BigSearchProps = {
    funcInput: SearchProps['func']
    funcButton: () => void
    placeholder?: string
    selects?: {
        funcSelect: () => void
        content: any[]
        placeholder?: string
    }[]
}

export const BigSearch: FC<BigSearchProps> = ({
    funcInput,
    funcButton,
    placeholder = 'Search',
    selects,
}) => {
    const { isMobile } = useScreenWidth()
    const handleAlign = getGridAlign(selects ?? [])

    return (
        <>
            <Grid alignColumns="3fr 1fr" alignItems="center" columnGap={15}>
                <Grid columnItem={[1, 2]}>
                    <Search
                        func={funcInput}
                        placeholder={placeholder ?? undefined}
                    />
                </Grid>
                <Grid columnItem={[2, 2]}>
                    <Button
                        type="search"
                        func={funcButton}
                        funcResp={false}
                        content={
                            isMobile ? (
                                <FontAwesomeIcon icon={faSearch} />
                            ) : (
                                'Search'
                            )
                        }
                        color="white"
                        coarsePadding={!isMobile}
                    />
                </Grid>
            </Grid>
            {selects && (
                <>
                    <Spacing mY={30} />
                    <Grid alignColumns={handleAlign} columnGap={15}>
                        {selects.map(
                            ({ funcSelect, content, placeholder }, index) => (
                                <Grid
                                    columnItem={[index + 1, selects.length + 1]}
                                >
                                    <SearchList
                                        key={generateUniqueKey(index)}
                                        func={funcSelect}
                                        content={content}
                                        placeholder={placeholder ?? ''}
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                </>
            )}
        </>
    )
}
