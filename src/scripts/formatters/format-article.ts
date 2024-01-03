import { ArticleProps, TypographyTextProps } from '../../components/bash-blocks'

export function formatArticle(
    sections: ArticleProps['sections'],
    type?: TypographyTextProps['type'],
    color?: TypographyTextProps['color'],
    boldFace?: TypographyTextProps['boldFace'],
    italicize?: TypographyTextProps['italicize'],
    smallCaps?: TypographyTextProps['smallCaps'],
    textDecoration?: TypographyTextProps['textDecoration'],
    light?: TypographyTextProps['light'],
    shadow?: TypographyTextProps['shadow']
) {
    const formattedSections: ArticleProps['sections'] = []

    sections.forEach((section: ArticleProps['sections'][0]) => {
        formattedSections.push({
            type: type,
            content: section.content,
            color: color,
            boldFace: boldFace,
            italicize: italicize,
            smallCaps: smallCaps,
            textDecoration: textDecoration,
            light: light,
            shadow: shadow,
        })
    })

    return formattedSections
}
