import Tile from '../../components/Tile';
import Typography from '../Typography';

function TypographyStories() {
    return (
        <>
            <Tile
                type='clear-condensed'
                content={
                    <>
                        <Typography type='t1' fontFamily='sans-serif' content='Typography' textAlign='center' paragraphMargins />
                        <Typography type='h1' fontFamily='sans-serif' content='Serif Types' textAlign='center' paragraphMargins />
                    </>
                }
            />
            <Tile
                type='solid'
                content={
                    <>
                        <Typography type='t1' fontFamily='serif' content='Typography t1' textAlign='left' />
                        <Typography type='t2' fontFamily='serif' content='Typography t2' textAlign='left' />
                        <Typography type='h1' fontFamily='serif' content='Typography h1' textAlign='left' />
                        <Typography type='h2' fontFamily='serif' content='Typography h2' textAlign='left' />
                        <Typography type='h3' fontFamily='serif' content='Typography h3' textAlign='left' />
                        <Typography type='h4' fontFamily='serif' content='Typography h4' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='Typography body' textAlign='justify' inline />{' '}
                        <Typography type='body' fontFamily='serif' content='Typography body bold-faced ' textAlign='justify' boldFace inline />{' '}
                        <Typography type='body' fontFamily='serif' content='Typography body italicized' textAlign='justify' italicize inline />{' '}
                        <Typography type='body' fontFamily='serif' content='Typography body bold-faced and italicized (bold-oblique)' textAlign='justify' boldFace italicize inline />
                        <Typography type='caption' fontFamily='serif' content='Typography caption' textAlign='left' />
                        <Typography type='footnote' fontFamily='serif' content='Typography footnote' textAlign='left' />
                    </>
                }
            />
            <Tile
                type='clear-condensed'
                content={
                    <Typography type='h1' fontFamily='sans-serif' content='Sans-Serif Types' textAlign='center' paragraphMargins />
                }
            />
            <Tile
                type='solid'
                content={
                    <>
                        <Typography type='t1' fontFamily='sans-serif' content='Typography t1' textAlign='left' />
                        <Typography type='t2' fontFamily='sans-serif' content='Typography t2' textAlign='left' />
                        <Typography type='h1' fontFamily='sans-serif' content='Typography h1' textAlign='left' />
                        <Typography type='h2' fontFamily='sans-serif' content='Typography h2' textAlign='left' />
                        <Typography type='h3' fontFamily='sans-serif' content='Typography h3' textAlign='left' />
                        <Typography type='h4' fontFamily='sans-serif' content='Typography h4' textAlign='left' />
                        <Typography type='body' fontFamily='sans-serif' content='Typography body' textAlign='justify' inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content='Typography body bold-faced ' textAlign='justify' boldFace inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content='Typography body italicized' textAlign='justify' italicize inline />{' '}
                        <Typography type='body' fontFamily='sans-serif' content='Typography body bold-faced and italicized' textAlign='justify' boldFace italicize inline />
                        <Typography type='caption' fontFamily='sans-serif' content='Typography caption' textAlign='left' />
                        <Typography type='footnote' fontFamily='sans-serif' content='Typography footnote' textAlign='left' />
                    </>
                }
            />
            <Tile
                type='clear-condensed'
                content={
                    <Typography type='h1' fontFamily='sans-serif' content='Text Decoration' textAlign='center' paragraphMargins />
                }
            />
            <Tile
                type='solid'
                content={
                    <>
                        <Typography type='h2' fontFamily='sans-serif' content='Typography overline' textAlign='left' inline textDecoration='overline' />{' '}
                        <Typography type='h2' fontFamily='sans-serif' content='Typography strike-through' textAlign='left' inline textDecoration='line-through' />{' '}
                        <Typography type='h2' fontFamily='sans-serif' content='Typography underline' textAlign='left' inline textDecoration='underline' />
                    </>
                }
            />
            <Tile
                type='clear-condensed'
                content={
                    <Typography type='h1' fontFamily='sans-serif' content='Casing' textAlign='center' paragraphMargins />
                }
            />
            <Tile
                type='solid'
                content={
                    <>
                        <Typography type='body' fontFamily='serif' content='Title Case' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='Capitalization' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='Sentence case' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='UPPERCASE (ALL CAPS)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='lowercase' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='Small-Caps (Title)' textAlign='left' smallCaps />
                        <Typography type='body' fontFamily='serif' content='small-caps (Lower)' textAlign='left' smallCaps />
                        <Typography type='body' fontFamily='serif' content='(CamelCase) (PascalCase) (Upper)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='(camelCase) (pascalCase) (Lower)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='Snake_Case (Sentence)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='SNAKE_CASE (Upper)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='snake_case (Lower)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='sTUDLYCAPS (sTICKYCAPS)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='KEBAB-CASE (Upper)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='kebab-case (Lower)' textAlign='left' />
                        <Typography type='body' fontFamily='serif' content='l33t (Leet)' textAlign='left' />
                    </>
                }
            />
        </>
    );
}

export default TypographyStories;