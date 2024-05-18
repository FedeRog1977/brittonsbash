import { ArticleProps, TextProps } from '../../components/bash-blocks'

export function formatArticle(
    sections: ArticleProps['sections'],
    type: TextProps['type'],
    color?: TextProps['color'],
    boldFace?: TextProps['boldFace'],
    italicize?: TextProps['italicize'],
    smallCaps?: TextProps['smallCaps'],
    textDecoration?: TextProps['textDecoration'],
    light?: TextProps['light'],
    shadow?: TextProps['shadow']
) {
    const formattedSections: ArticleProps['sections'] = []

    sections.forEach((section) => {
        formattedSections.push({
            type: section.type ? section.type : type,
            children: section.children,
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
