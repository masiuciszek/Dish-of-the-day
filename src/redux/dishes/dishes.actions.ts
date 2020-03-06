/* eslint-disable no-undef */
import { Dispatch } from 'react';
import {
  ActionTypesMeals, GetMealsAction, CatchErrorSearchAction, ClearSearchAction,
} from './dishes.types';


export const catchError = (err: Record<string, any>): CatchErrorSearchAction => ({
  type: ActionTypesMeals.CATCH_ERROR,
  payload: err,
});

export const getDishes = (text: string) => async (dispatch: Dispatch<GetMealsAction>) => {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
    const resBody = await res.json();
    dispatch({
      type: ActionTypesMeals.GET_MEALS,
      payload: resBody.meals,
    });
  } catch (err) {
    console.error(err);
    catchError(err);
  }
};


export const clearSearchMeals = (): ClearSearchAction => ({
  type: ActionTypesMeals.CLEAR_SEARCH,
});
