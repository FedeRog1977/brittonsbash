import { useEffect, useState } from 'react';
import { compileBrittonsFoodRC } from '../../../../../utils/compilers/compile-brittons-foodrc';
import { useScreenWidth, useShowElement } from '../../../../../utils';

export const useBrittonsFoodRC = () => {
  const allFood = compileBrittonsFoodRC();
  const [food, setFood] = useState(allFood[0]);

  const handleSelect = (e: any) => {
    for (var i in allFood) {
      const fullName = allFood[i].name;

      if (fullName === e.currentTarget.value) {
        setFood(allFood[i]);
      }
    }
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
    handleSelect,
    food,
    handleToggleElements,
    showDescription,
    showMatrix,
  };
};
