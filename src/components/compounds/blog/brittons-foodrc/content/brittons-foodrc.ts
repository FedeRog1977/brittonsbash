import { FoodProps } from '../../../../../utils';
import {
  PageBackgroundProps,
  FootnoteTileProps,
} from '../../../../bash-blocks';

type BrittonsFoodRCProps = {
  background: PageBackgroundProps;
  tileOne: {
    roast: FoodProps[];
    stew: FoodProps[];
    ragu: FoodProps[];
    fish: FoodProps[];
    pasta: FoodProps[];
    bread: FoodProps[];
    sweet: FoodProps[];
    misc: FoodProps[];
  };
  tileTwo: FootnoteTileProps;
};

export const brittonsFoodRCContent: BrittonsFoodRCProps = {
  background: { content: 'BrittonsFoodRC' },
  tileOne: {
    roast: [
      {
        name: 'Christmas Dinner',
        ingredients: [
          { title: 'Salmon Rillettes', content: ['One', 'Two', 'Three'] },
          { title: 'Beef', content: ['One', 'Two', 'Three'] },
          { title: 'Chicken', content: ['One', 'Two', 'Three'] },
        ],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        images: [
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/1.jpg',
            alt: 'christmas-dinner-1',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/2.jpg',
            alt: 'christmas-dinner-2',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/3.jpg',
            alt: 'christmas-dinner-3',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/4.jpg',
            alt: 'christmas-dinner-4',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/5.jpg',
            alt: 'christmas-dinner-5',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/6.jpg',
            alt: 'christmas-dinner-6',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/7.jpg',
            alt: 'christmas-dinner-7',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/8.jpg',
            alt: 'christmas-dinner-8',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/9.jpg',
            alt: 'christmas-dinner-9',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/10.jpg',
            alt: 'christmas-dinner-10',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/11.jpg',
            alt: 'christmas-dinner-11',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/12.jpg',
            alt: 'christmas-dinner-12',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/13.jpg',
            alt: 'christmas-dinner-13',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/14.jpg',
            alt: 'christmas-dinner-14',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/15.jpg',
            alt: 'christmas-dinner-15',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/16.jpg',
            alt: 'christmas-dinner-16',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/17.jpg',
            alt: 'christmas-dinner-17',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/18.jpg',
            alt: 'christmas-dinner-18',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/19.jpg',
            alt: 'christmas-dinner-19',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/20.jpg',
            alt: 'christmas-dinner-20',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/21.jpg',
            alt: 'christmas-dinner-21',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/22.jpg',
            alt: 'christmas-dinner-22',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/23.jpg',
            alt: 'christmas-dinner-23',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/24.jpg',
            alt: 'christmas-dinner-24',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/25.jpg',
            alt: 'christmas-dinner-25',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/26.jpg',
            alt: 'christmas-dinner-26',
          },
          {
            url: 'https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/27.jpg',
            alt: 'christmas-dinner-27',
          },
        ],
        tags: [],
      },
      {
        name: 'Chicken Dinner',
        ingredients: [],
        description: '',
        images: [
          {
            url: '',
            alt: '',
          },
        ],
        tags: [],
      },
      {
        name: 'Topside Of Beef',
        ingredients: [],
        description: '',
        images: [
          {
            url: '',
            alt: '',
          },
        ],
        tags: [],
      },
    ],
    stew: [],
    ragu: [],
    fish: [],
    pasta: [],
    bread: [],
    sweet: [],
    misc: [],
  },
  tileTwo: {
    content:
      'All recipes are either abstracts, partials, redevelopments of various readings and / or watching; or original',
  },
};
