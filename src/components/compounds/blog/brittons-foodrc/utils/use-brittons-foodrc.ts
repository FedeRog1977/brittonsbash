import { useEffect, useState } from 'react';
import { compileBrittonsFoodRC } from './compile-brittons-foodrc';
import { useScreenWidth, useShowElement } from '../../../../../utils';
import { emptyFoodData } from '../mocks/empty-food-data';
import { brittonsFoodRCContent } from '../content/brittons-foodrc';

export const useBrittonsFoodRC = () => {
  const allFood = compileBrittonsFoodRC();
  const [food, setFood] = useState(allFood[0]);

  const [isMeat, setIsMeat] = useState(false);
  const [isPoultry, setIsPoultry] = useState(false);
  const [isFish, setIsFish] = useState(false);
  const [isPasta, setIsPasta] = useState(false);
  const [isBread, setIsBread] = useState(false);
  const [isSweet, setIsSweet] = useState(false);
  const [isMisc, setIsMisc] = useState(false);

  const { showElement: showSearchList, setShowElement: setShowSearchList } =
    useShowElement();
  const [foodData, setFoodData] = useState(emptyFoodData);

  const handleCategory = (value: string) => {
    if (value === 'Meat') {
      setIsMeat(true);
      setIsPoultry(false);
      setIsFish(false);
      setIsPasta(false);
      setIsBread(false);
      setIsSweet(false);
      setIsMisc(false);
      setShowSearchList(!showSearchList);
      setFoodData(brittonsFoodRCContent.tileOne.meat);
    }
    if (value === 'Poultry') {
      setIsMeat(false);
      setIsPoultry(true);
      setIsFish(false);
      setIsPasta(false);
      setIsBread(false);
      setIsSweet(false);
      setIsMisc(false);
      setShowSearchList(!showSearchList);
      setFoodData(brittonsFoodRCContent.tileOne.poultry);
    }
    if (value === 'Fish') {
      setIsMeat(false);
      setIsPoultry(false);
      setIsFish(true);
      setIsPasta(false);
      setIsBread(false);
      setIsSweet(false);
      setIsMisc(false);
      setShowSearchList(!showSearchList);
      setFoodData(brittonsFoodRCContent.tileOne.fish);
    }
    if (value === 'Pasta') {
      setIsMeat(true);
      setIsPoultry(false);
      setIsFish(false);
      setIsPasta(true);
      setIsBread(false);
      setIsSweet(false);
      setIsMisc(false);
      setShowSearchList(!showSearchList);
      setFoodData(brittonsFoodRCContent.tileOne.pasta);
    }
    if (value === 'Bread') {
      setIsMeat(false);
      setIsPoultry(false);
      setIsFish(false);
      setIsPasta(false);
      setIsBread(true);
      setIsSweet(false);
      setIsMisc(false);
      setShowSearchList(!showSearchList);
      setFoodData(brittonsFoodRCContent.tileOne.bread);
    }
    if (value === 'Sweet') {
      setIsMeat(false);
      setIsPoultry(false);
      setIsFish(false);
      setIsPasta(false);
      setIsBread(false);
      setIsSweet(true);
      setIsMisc(false);
      setShowSearchList(!showSearchList);
      setFoodData(brittonsFoodRCContent.tileOne.sweet);
    }
    if (value === 'Misc') {
      setIsMeat(false);
      setIsPoultry(false);
      setIsFish(false);
      setIsPasta(false);
      setIsBread(false);
      setIsSweet(false);
      setIsMisc(true);
      setShowSearchList(!showSearchList);
      setFoodData(brittonsFoodRCContent.tileOne.misc);
    }
  };

  const handleSelect = (e: any) => {
    for (var i in allFood) {
      const fullName = allFood[i].name;

      if (fullName === e.currentTarget.value) {
        setFood(allFood[i]);
      }
    }

    setShowSearchList(!showSearchList);
  };

  const { isMobile } = useScreenWidth();

  const { showElement: showDescription, setShowElement: setShowDescription } =
    useShowElement();
  const { showElement: showMatrix, setShowElement: setShowMatrix } =
    useShowElement();

  useEffect(() => {
    setShowMatrix(!isMobile && true);
  }, []);

  const handleToggleElements = (value: string) => {
    if (value === 'description') {
      setShowDescription(!showDescription);
    }
    if (value === 'matrix') {
      setShowMatrix(!showMatrix);
    }
    // Modal cannot be handled here
  };

  return {
    handleCategory,
    showSearchList,
    foodData,
    isMeat,
    isPoultry,
    isFish,
    isPasta,
    isBread,
    isSweet,
    isMisc,
    handleSelect,
    food,
    handleToggleElements,
    showDescription,
    showMatrix,
  };
};
