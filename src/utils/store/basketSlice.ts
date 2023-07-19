import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialStoreModel {
  orderPizzaIds: Record<number, number>;
  totalPizzaCount: number;
}

const initialStore: InitialStoreModel = {
  orderPizzaIds: {},
  totalPizzaCount: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialStore,
  reducers: {
    addToBasket: (state, action: PayloadAction<number>) => {
      const pizzaId = action.payload;
      state.orderPizzaIds[pizzaId] = (state.orderPizzaIds?.[pizzaId] || 0) + 1;
      state.totalPizzaCount += 1;
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      const pizzaId = action.payload;
      if (state.orderPizzaIds?.[pizzaId]) {
        state.orderPizzaIds[pizzaId] -= 1;
        state.totalPizzaCount -= 1;
        if (state.orderPizzaIds[pizzaId] === 0) {
          delete state.orderPizzaIds[pizzaId];
        }
      }
    },
  },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;
export default basketSlice.reducer;
