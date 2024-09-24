import { ArticlePrefaceProps } from '../../../../bash-blocks/index.js';

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
