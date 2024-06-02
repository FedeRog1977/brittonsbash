import { FC } from 'react';
import { Typography } from '../../basics';
import { TextStyle } from '../../reference';

export type ArticleProps = {
  sections: TextStyle[];
  fontFamily?: TextStyle['fontFamily'];
  textAlign?: TextStyle['textAlign'];
  extendParagraphMargins?: boolean;
};

export const Article: FC<ArticleProps> = ({
  sections,
  fontFamily,
  textAlign,
  extendParagraphMargins,
}) => {
  const sectionsFinal = sections.length - 1;

  return (
    <>
      {sections
        .slice(0, sectionsFinal)
        .map(
          ({
            variant = 'body',
            children,
            color = 'darkerGrey',
            inline,
            boldFace,
            italicize,
            smallCaps,
            textDecoration,
            link,
            shadow,
          }) => (
            <Typography
              key={variant}
              variant={variant}
              fontFamily={fontFamily}
              color={color}
              textAlign={textAlign}
              inline={inline}
              boldFace={boldFace}
              italicize={italicize}
              smallCaps={smallCaps}
              textDecoration={textDecoration}
              link={link}
              shadow={shadow}
              paragraphMargins
            >
              {children}
            </Typography>
          )
        )}

      <Typography
        variant={sections[sectionsFinal].variant}
        fontFamily={fontFamily}
        color={sections[sectionsFinal].color}
        textAlign={textAlign}
        inline={sections[sectionsFinal].inline}
        boldFace={sections[sectionsFinal].boldFace}
        italicize={sections[sectionsFinal].italicize}
        smallCaps={sections[sectionsFinal].smallCaps}
        textDecoration={sections[sectionsFinal].textDecoration}
        link={sections[sectionsFinal].link}
        shadow={sections[sectionsFinal].shadow}
        paragraphMargins={extendParagraphMargins}
      >
        {sections[sectionsFinal].children}
      </Typography>
    </>
  );
};
