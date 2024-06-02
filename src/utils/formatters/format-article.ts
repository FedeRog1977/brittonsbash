import { ArticleProps, TextStyle } from '../../components/bash-blocks';

export const formatArticle = (
  sections: ArticleProps['sections'],
  variant: TextStyle['variant'],
  color?: TextStyle['color'],
  boldFace?: TextStyle['boldFace'],
  italicize?: TextStyle['italicize'],
  smallCaps?: TextStyle['smallCaps'],
  textDecoration?: TextStyle['textDecoration'],
  shadow?: TextStyle['shadow']
) => {
  const formattedSections: ArticleProps['sections'] = [];

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
    });
  });

  return formattedSections;
};
