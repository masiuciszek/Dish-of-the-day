/* eslint-disable import/extensions */
import * as React from 'react';
import Title from '../styled/title/Title';
import { DishOfTodayWrapper, BtnWrapper } from './Styles.dishOT';
import { PrimaryBtn } from '../styled/buttons';

interface P {

}

const DishOfToday: React.FC<P> = () => {
  let a;
  return (
    <DishOfTodayWrapper>

      <Title mainTitle="What is your" subTitle="dish of today?" />
      <BtnWrapper>
        <PrimaryBtn>Dish Of Today</PrimaryBtn>
      </BtnWrapper>
    </DishOfTodayWrapper>
  );
};
export default DishOfToday;
