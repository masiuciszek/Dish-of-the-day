/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import Title from '../styled/title/Title';
import { DishOfTodayWrapper, BtnWrapper, DishWrapper } from './Styles.dishOT';
import { PrimaryBtn } from '../styled/buttons';
import { AppState } from '../../redux';
import { getRandomDish } from '../../redux/dishes/dishes.actions';
import { getDishSelector, dishesLoadingSelector } from '../../redux/dishes/dishes.selector';
import { IMeal } from '../../redux/dishes/dishes.types';
import DishDisplay from './DishDisplay';

interface P {
  randomDish: IMeal | null;
  getRandomDish: () => void;
  isLoading: boolean;
}

const DishOfToday: React.FC<P> = ({ getRandomDish, randomDish, isLoading }) => (
  <DishOfTodayWrapper>
    <Title mainTitle="What is your" subTitle="dish of today?" />
    <BtnWrapper>
      <PrimaryBtn onClick={getRandomDish}>Dish Of Today</PrimaryBtn>
    </BtnWrapper>
    <DishWrapper>
      {!isLoading && randomDish !== null && <DishDisplay key={randomDish.idMeal} dish={randomDish} /> }
    </DishWrapper>
  </DishOfTodayWrapper>
);

const mapStateToProps = (state: AppState) => ({
  randomDish: getDishSelector(state),
  isLoading: dishesLoadingSelector(state),
});
export default connect(mapStateToProps, { getRandomDish })(DishOfToday);
