import { ArticleProps, Text } from '../../components/bash-blocks'

export const formatArticle = (
    sections: ArticleProps['sections'],
    variant: Text['variant'],
    color?: Text['color'],
    boldFace?: Text['boldFace'],
    italicize?: Text['italicize'],
    smallCaps?: Text['smallCaps'],
    textDecoration?: Text['textDecoration'],
    shadow?: Text['shadow']
) => {
    const formattedSections: ArticleProps['sections'] = []

    sections.forEach((section) => {
        formattedSections.push({
            variant: section.variant ? section.variant : variant,
            children: section.children,
            color: section.color ? section.color : color,
            boldFace: section.boldFace ? section.boldFace : boldFace,
            italicize: section.italicize ? section.italicize : italicize,
            smallCaps: section.smallCaps ? section.smallCaps : smallCaps,
            textDecoration: section.textDecoration
                ? section.textDecoration
                : textDecoration,
            shadow: section.shadow ? section.shadow : shadow,
        })
    })

    return formattedSections
}
