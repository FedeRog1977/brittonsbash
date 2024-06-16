import { ArticlePrefaceProps } from '../../../components/bash-blocks';

export type FoodProps = {
  name: string;
  ingredients: ArticlePrefaceProps['entries'];
  description: string;
  images: {
    url: string;
    alt: string;
  }[];
  tags: string[];
};
