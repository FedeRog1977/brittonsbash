import { brittonsFoodRCContent } from '../content/brittonsfoodrc-content';
import { Food } from '../types/food';

// TODO: discontinue this once recipe API is implemented
export const compileBrittonsFoodRC = () => {
  const allFood: Food[] = [];

  brittonsFoodRCContent.tileOne.meat.forEach((food) => {
    allFood.push(food);
  });
  brittonsFoodRCContent.tileOne.poultry.forEach((food) => {
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
