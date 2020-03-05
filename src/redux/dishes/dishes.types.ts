/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IMeal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: null | string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
}


export interface IMealState {
  meals: IMeal[];
  meal: IMeal | null;
  loading: boolean;
  error: Record<string, any> | null;
}


export enum ActionTypesMeals {
  GET_MEALS = 'GET_MEALS',
  CLEAR_SEARCH = 'CLEAR_SEARCH',
}

export interface GetMealsAction {
  type: ActionTypesMeals.GET_MEALS;
  payload: IMeal[];
}

export interface ClearSearchAction {
  type: ActionTypesMeals.CLEAR_SEARCH;
}


export type MealActionTypes = GetMealsAction | ClearSearchAction
