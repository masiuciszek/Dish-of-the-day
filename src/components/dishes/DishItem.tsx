/* eslint-disable react/prop-types */
import * as React from 'react';
import { IMeal } from '../../redux/dishes/dishes.types';
import { StyledDishItem, StyledImage } from './Style.dishes';
import useToggle from '../../hooks/useToggle';

interface P {
  dish: IMeal;
}

const DishItem: React.FC<P> = ({ dish }) => {
  const {
    strMeal, strCategory, strArea, strMealThumb,
  } = dish;
  const [showMore, toggleMore] = useToggle(false);
  return (
    <StyledDishItem>
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

      <div id="moreInfo" onClick={toggleMore}>⚛️</div>
      <div className="overlay" />
      {showMore && <StyledImage src={strMealThumb} alt={strMeal} /> }

    </StyledDishItem>
  );
};
export default DishItem;
