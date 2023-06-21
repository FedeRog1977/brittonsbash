import { Typography } from '../..'
import { Footnote, Tile } from '..'

export const FootnoteStories = () => (
    <>
        <Tile type="clear-condensed">
            <Typography
                type="t1"
                fontFamily="sans-serif"
                content="Page Footnote"
                textAlign="center"
                paragraphMargins
            />
        </Tile>
        <Footnote content="*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    </>
)
