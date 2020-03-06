import * as React from 'react';
import { DishesWrapper } from './Style.dishes';
import DishSearch from './DishSearch';
import Title from '../styled/title/Title';

interface P {

}

const Dishes: React.FC<P> = () => {
  let a;
  return (
    <DishesWrapper>
      <Title mainTitle="Search" subTitle="for your favorite food" />
      <DishSearch />
    </DishesWrapper>
  );
};
export default Dishes;
