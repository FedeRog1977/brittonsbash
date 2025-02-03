import { Food } from '../types/food';

export const emptyFoodData: Food[] = [
  {
    name: '',
    ingredients: [{ title: '', content: [''] }],
    description: '',
    images: [
      {
        url: '',
        alt: '',
      },
    ],
    tags: [],
  },
];
