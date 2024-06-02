import { BodyProps } from '../components/body';
import { BooksProps } from '../components/books';
import { ImagesProps } from '../components/images';

type OrderedSection<T extends string, P extends object> = {
  component: T;
  content: P;
};

export type Section =
  | OrderedSection<'body', BodyProps>
  | OrderedSection<'books', BooksProps>
  | OrderedSection<'images', ImagesProps>;
