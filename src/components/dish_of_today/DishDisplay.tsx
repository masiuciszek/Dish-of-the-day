/* eslint-disable react/prop-types */
import * as React from 'react';
import { IMeal } from '../../redux/dishes/dishes.types';
import { StyledDishDisplay, StyledDishHeader, StyledIngredientsList } from './Styles.dishOT';

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
      <StyledIngredientsList>
        <h4>Ingredients</h4>
        <strong>
          <span>{dish.strIngredient1 && dish.strIngredient1}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient2 && dish.strIngredient2}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient3 && dish.strIngredient3}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient4 && dish.strIngredient4}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient5 && dish.strIngredient5}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient6 && dish.strIngredient6}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient7 && dish.strIngredient7}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient8 && dish.strIngredient8}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient9 && dish.strIngredient9}</span>
        </strong>
        <strong>
          <span>{dish.strIngredient10 && dish.strIngredient10}</span>
        </strong>
      </StyledIngredientsList>
    </StyledDishDisplay>
  );
};
export default DishDisplay;
