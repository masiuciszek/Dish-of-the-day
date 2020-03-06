import { createSelector } from 'reselect';
import { AppState } from '..';
import { IMealState } from './dishes.types';


const dishSelector = (state: AppState) => state.dishes;


export const getDishesSelector = createSelector(
  [dishSelector],
  (state: IMealState) => state.meals,
);

export const dishesLoadingSelector = createSelector(
  [dishSelector],
  (state: IMealState) => state.loading,
);
