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
    default:
      return state;
  }
};
