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
            type: section.type ? section.type : type,
            content: section.content,
            color: section.color ? section.color : color,
            boldFace: section.boldFace ? section.boldFace : boldFace,
            italicize: section.italicize ? section.italicize : italicize,
            smallCaps: section.smallCaps ? section.smallCaps : smallCaps,
            textDecoration: section.textDecoration
                ? section.textDecoration
                : textDecoration,
            light: section.light ? section.light : light,
            shadow: section.shadow ? section.shadow : shadow,
        })
    })

    return formattedSections
}
