import { FC } from 'react';
import { Body } from '../components/body';
import { Books } from '../components/books';
import { Images } from '../components/images';
import { Section } from '../types/section';

export const getContent: FC<Section> = (section) => (
  <>
    {section.component === 'body' ? <Body {...section.content} /> : null}
    {section.component === 'books' ? <Books {...section.content} /> : null}
    {section.component === 'images' ? <Images {...section.content} /> : null}
  </>
);
