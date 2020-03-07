/* eslint-disable import/extensions */
import { IMealState, MealActionTypes, ActionTypesMeals } from './dishes.types';


const initialState: IMealState = {
  meal: null,
  meals: [],
  loading: true,
  error: null,
};

export default (state: IMealState = initialState, action: MealActionTypes) => {
  switch (action.type) {
    case ActionTypesMeals.GET_MEALS:
      return {
        ...state,
        meals: action.payload,
        loading: false,
      };
    case ActionTypesMeals.CATCH_ERROR:
      return {
        error: action.payload,
        loading: false,
      };
    case ActionTypesMeals.CLEAR_SEARCH:
      return {
        ...state,
        meals: [],
      };
    default:
      return state;
  }
};
