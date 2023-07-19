import { useState } from "react";

import { PizzaListItem } from "utils/types";
import { pizzaArrayMockData } from "utils/constants";
import { useAppSelector } from "utils/store";

type ReturnProps = {
  searchValue: string;
  onChangeText: (value: string) => void;
  pizzaArray: PizzaListItem[];
  totalPizzaCount: number;
};

export const usePizzaList = (): ReturnProps => {
  const [pizzaArray, setPizzaArray] =
    useState<PizzaListItem[]>(pizzaArrayMockData);
  const [searchValue, setSearchValue] = useState<string>("");
  const totalPizzaCount = useAppSelector(
    (store) => store.basket.totalPizzaCount
  );

  const onSearchPizza = (search: string): void => {
    const filteredList = pizzaArrayMockData?.filter((pizza) =>
      pizza.title.includes(search)
    );
    setPizzaArray(filteredList);
  };

  const onChangeText = (value: string): void => {
    setSearchValue((prev) => value);
    onSearchPizza(value);
  };

  return {
    searchValue,
    onChangeText,
    pizzaArray,
    totalPizzaCount,
  };
};
