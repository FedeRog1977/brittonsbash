import { ArticleProps, Text } from '../../components/bash-blocks'

export const formatArticle = (
    sections: ArticleProps['sections'],
    type: Text['type'],
    color?: Text['color'],
    boldFace?: Text['boldFace'],
    italicize?: Text['italicize'],
    smallCaps?: Text['smallCaps'],
    textDecoration?: Text['textDecoration'],
    light?: Text['light'],
    shadow?: Text['shadow']
) => {
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
