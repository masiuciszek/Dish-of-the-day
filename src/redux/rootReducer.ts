/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import dishesReducer from './dishes/dishes.reducer';

export default combineReducers({
  dishes: dishesReducer,
});
