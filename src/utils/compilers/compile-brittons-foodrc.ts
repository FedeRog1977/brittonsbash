import { brittonsFoodRCContent } from '../../components/compounds';
import { FoodProps } from './types';

export const compileBrittonsFoodRC = () => {
  // TODO: amend type
  const allFood: FoodProps[] = [];

  brittonsFoodRCContent.tileOne.roast.forEach((food) => {
    allFood.push(food);
  });
  brittonsFoodRCContent.tileOne.stew.forEach((food) => {
    allFood.push(food);
  });
  brittonsFoodRCContent.tileOne.ragu.forEach((food) => {
    allFood.push(food);
  });
  brittonsFoodRCContent.tileOne.fish.forEach((food) => {
    allFood.push(food);
  });
  brittonsFoodRCContent.tileOne.pasta.forEach((food) => {
    allFood.push(food);
  });
  brittonsFoodRCContent.tileOne.bread.forEach((food) => {
    allFood.push(food);
  });
  brittonsFoodRCContent.tileOne.sweet.forEach((food) => {
    allFood.push(food);
  });
  brittonsFoodRCContent.tileOne.misc.forEach((food) => {
    allFood.push(food);
  });

  return allFood;
};
