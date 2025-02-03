import { ArticlePrefaceProps } from '../../../../components';

// TODO: discontinue this once recipe API is implemented
export type Food = {
  name: string;
  ingredients: ArticlePrefaceProps['entries'];
  description: string;
  images: {
    url: string;
    alt: string;
  }[];
  tags: string[];
};
