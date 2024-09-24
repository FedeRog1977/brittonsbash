import { Food } from '../types/food.js';

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
