/* eslint-disable react/prop-types */
import * as React from 'react';
import { IMeal } from '../../redux/dishes/dishes.types';
import { StyledDishDisplay, StyledDishHeader } from './Styles.dishOT';

interface P {
  dish: IMeal;
}

const DishDisplay: React.FC<P> = ({ dish }) => {
  let a;
  return (
    <StyledDishDisplay>
      <StyledDishHeader>
        <div className="title"><h3>{dish.strMeal}</h3></div>
        <div className="img">
          {' '}
          <img src={dish.strMealThumb} alt={dish.strMeal} />
          {' '}
        </div>
      </StyledDishHeader>

    </StyledDishDisplay>
  );
};
export default DishDisplay;
