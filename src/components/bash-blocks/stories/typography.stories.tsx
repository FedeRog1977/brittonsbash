import { Tile, Typography } from '..'

export const TypographyStories = () => (
    <>
        <Tile type="clear" top>
            <Typography
                type="t1"
                fontFamily="sans-serif"
                content="Typography"
                textAlign="center"
            />
        </Tile>

        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Serif Types"
                textAlign="center"
                paragraphMargins
            />
            <Typography
                type="t1"
                fontFamily="serif"
                content="Typography t1"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="t2"
                fontFamily="serif"
                content="Typography t2"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h1"
                fontFamily="serif"
                content="Typography h1"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h2"
                fontFamily="serif"
                content="Typography h2"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h3"
                fontFamily="serif"
                content="Typography h3"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h4"
                fontFamily="serif"
                content="Typography h4"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="serif"
                content={
                    <>
                        <Typography
                            fontFamily="serif"
                            content="Typography body"
                            textAlign="justify"
                            inline
                        />{' '}
                        <Typography
                            fontFamily="serif"
                            content="Typography body bold-faced"
                            textAlign="justify"
                            boldFace
                            inline
                        />{' '}
                        <Typography
                            fontFamily="serif"
                            content="Typography body italicized"
                            textAlign="justify"
                            italicize
                            inline
                        />{' '}
                        <Typography
                            fontFamily="serif"
                            content="Typography body bold-faced and italicized (bold-oblique)"
                            textAlign="justify"
                            boldFace
                            italicize
                            inline
                        />
                    </>
                }
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="serif"
                content={
                    <>
                        <Typography
                            fontFamily="serif"
                            content="Typography body link"
                            textAlign="justify"
                            inline
                            link={{
                                url: 'http://lewisbritton.com',
                                newTab: true,
                            }}
                        />{' '}
                        <Typography
                            fontFamily="serif"
                            content="Typography body bold-faced link"
                            textAlign="justify"
                            boldFace
                            inline
                            link={{
                                url: 'http://lewisbritton.com',
                                newTab: true,
                            }}
                        />{' '}
                        <Typography
                            fontFamily="serif"
                            content="Typography body italicized link"
                            textAlign="justify"
                            italicize
                            inline
                            link={{
                                url: 'http://lewisbritton.com',
                                newTab: true,
                            }}
                        />{' '}
                        <Typography
                            fontFamily="serif"
                            content="Typography body bold-faced and italicized (bold-oblique) link"
                            textAlign="justify"
                            boldFace
                            italicize
                            inline
                            link={{
                                url: 'http://lewisbritton.com',
                                newTab: true,
                            }}
                        />
                    </>
                }
                paragraphMargins
            />
            <Typography
                type="caption"
                fontFamily="serif"
                content="Typography caption"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="footnote"
                fontFamily="serif"
                content="Typography footnote"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="tiny"
                fontFamily="serif"
                content="Typography tiny"
                textAlign="left"
                paragraphMargins
            />
        </Tile>

        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Sans-Serif Types"
                textAlign="center"
                paragraphMargins
            />
            <Typography
                type="t1"
                fontFamily="sans-serif"
                content="Typography t1"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="t2"
                fontFamily="sans-serif"
                content="Typography t2"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Typography h1"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h2"
                fontFamily="sans-serif"
                content="Typography h2"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h3"
                fontFamily="sans-serif"
                content="Typography h3"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h4"
                fontFamily="sans-serif"
                content="Typography h4"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="sans-serif"
                content={
                    <>
                        <Typography
                            content="Typography body"
                            textAlign="justify"
                            inline
                        />{' '}
                        <Typography
                            content="Typography body bold-faced"
                            textAlign="justify"
                            boldFace
                            inline
                        />{' '}
                        <Typography
                            content="Typography body italicized"
                            textAlign="justify"
                            italicize
                            inline
                        />{' '}
                        <Typography
                            content="Typography body bold-faced and italicized (bold-oblique)"
                            textAlign="justify"
                            boldFace
                            italicize
                            inline
                        />
                    </>
                }
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="sans-serif"
                content={
                    <>
                        <Typography
                            content="Typography body link"
                            textAlign="justify"
                            inline
                            link={{
                                url: 'http://lewisbritton.com',
                                newTab: true,
                            }}
                        />{' '}
                        <Typography
                            content="Typography body bold-faced link"
                            textAlign="justify"
                            boldFace
                            inline
                            link={{
                                url: 'http://lewisbritton.com',
                                newTab: true,
                            }}
                        />{' '}
                        <Typography
                            content="Typography body italicized link"
                            textAlign="justify"
                            italicize
                            inline
                            link={{
                                url: 'http://lewisbritton.com',
                                newTab: true,
                            }}
                        />{' '}
                        <Typography
                            content="Typography body bold-faced and italicized (bold-oblique) link"
                            textAlign="justify"
                            boldFace
                            italicize
                            inline
                            link={{
                                url: 'http://lewisbritton.com',
                                newTab: true,
                            }}
                        />
                    </>
                }
                paragraphMargins
            />
            <Typography
                type="caption"
                fontFamily="sans-serif"
                content="Typography caption"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="footnote"
                fontFamily="sans-serif"
                content="Typography footnote"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="tiny"
                fontFamily="sans-serif"
                content="Typography tiny"
                textAlign="left"
                paragraphMargins
            />
        </Tile>

        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Alignment"
                textAlign="center"
                paragraphMargins
            />
            <Typography
                type="h2"
                fontFamily="sans-serif"
                content="Left"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="h2"
                fontFamily="sans-serif"
                content="Right"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                textAlign="right"
                paragraphMargins
            />
            <Typography
                type="h2"
                fontFamily="sans-serif"
                content="Center"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                textAlign="center"
                paragraphMargins
            />
            <Typography
                type="h2"
                fontFamily="sans-serif"
                content="Justify"
                textAlign="left"
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                textAlign="justify"
                paragraphMargins
            />
        </Tile>

        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Text Decoration"
                textAlign="center"
                paragraphMargins
            />
            <Typography
                type="h2"
                fontFamily="sans-serif"
                content="Typography overline"
                textAlign="left"
                inline
                textDecoration="overline"
            />{' '}
            <Typography
                type="h2"
                fontFamily="sans-serif"
                content="Typography strike-through"
                textAlign="left"
                inline
                textDecoration="line-through"
            />{' '}
            <Typography
                type="h2"
                fontFamily="sans-serif"
                content="Typography underline"
                textAlign="left"
                inline
                textDecoration="underline"
            />
        </Tile>

        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Casing Examples"
                textAlign="center"
                paragraphMargins
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Title Case"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Capitalization"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Sentence case"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="UPPERCASE (ALL CAPS)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="lowercase"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Small-Caps (Title)"
                textAlign="left"
                smallCaps
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="small-caps (Lower)"
                textAlign="left"
                smallCaps
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="CamelCase (PascalCase) (Upper)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="camelCase (pascalCase) (Lower)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="Snake_Case (Sentence)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="SNAKE_CASE (Upper)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="snake_case (Lower)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="sTUDLYCAPS (sTICKYCAPS)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="KEBAB-CASE (Upper)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="kebab-case (Lower)"
                textAlign="left"
            />
            <Typography
                type="body"
                fontFamily="serif"
                content="l33t (Leet)"
                textAlign="left"
            />
        </Tile>
    </>
)
