import * as React from 'react';
import { connect } from 'react-redux';
import { DishesWrapper } from './Style.dishes';
import DishSearch from './DishSearch';
import Title from '../styled/title/Title';
import { AppState } from '../../redux';
import { getDishesSelector, dishesLoadingSelector } from '../../redux/dishes/dishes.selector';
import { IMeal } from '../../redux/dishes/dishes.types';

interface P {
  dishes: IMeal[];
  loading: boolean;
}

const Dishes: React.FC<P> = ({ dishes, loading }) => {
  let a;

  return (
    <DishesWrapper>
      <Title mainTitle="Search" subTitle="for your favorite food" />
      <DishSearch dishes={dishes} />
      {!loading && dishes !== null && dishes.map((dish) => (
        <li key={dish.idMeal}>{dish.strCategory}</li>
      ))}
    </DishesWrapper>
  );
};

const mapStateToProps = (state: AppState) => ({
  dishes: getDishesSelector(state),
  loading: dishesLoadingSelector(state),
});

export default connect(mapStateToProps)(Dishes);
