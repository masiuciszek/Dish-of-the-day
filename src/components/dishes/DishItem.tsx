/* eslint-disable react/prop-types */
import * as React from 'react';
import { IMeal } from '../../redux/dishes/dishes.types';
import { StyledDishItem, StyledImage } from './Style.dishes';

interface P {
  dish: IMeal;
}

const DishItem: React.FC<P> = ({ dish }) => {
  const {
    strMeal, strCategory, strArea, strMealThumb,
  } = dish;


  return (
    <StyledDishItem>
      <div className="content">
        <strong>
          Meal Name:
          {' '}
          <span>{strMeal}</span>
        </strong>
        <strong>
          Category:

          <span>{strCategory}</span>
        </strong>
        <strong>
          Country:
          {' '}
          <span>{strArea}</span>
        </strong>
      </div>
      <StyledImage src={strMealThumb} alt={strMeal} />

    </StyledDishItem>
  );
};
export default DishItem;
