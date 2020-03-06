/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { DishSearchWrapper, Input, StyledLabel } from './Style.dishes';
import { ReactComponent as SearchIcon } from '../../utils/images/search.svg';
import useToggle from '../../hooks/useToggle';
import { getDishes, clearSearchMeals } from '../../redux/dishes/dishes.actions';
import { IMeal } from '../../redux/dishes/dishes.types';

interface P {
  getDishes: (text: string) => void;
  clearSearchMeals: () => void;
  dishes: IMeal[];
}

const DishSearch: React.FC<P> = ({ getDishes, dishes, clearSearchMeals }) => {
  const [foodName, setfoodName] = React.useState<string>('');
  const [showInput, toggleInput] = useToggle(false);

  React.useEffect(() => {
    if (dishes === [] || dishes === null || dishes === undefined) {
      setfoodName('');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfoodName(e.target.value);
    if (e.target.value !== '') {
      getDishes(foodName);
    } else {
      clearSearchMeals();
    }
  };


  return (
    <DishSearchWrapper>
      <StyledLabel htmlFor="foodName">
        <span onClick={toggleInput}><SearchIcon /></span>
        {showInput && (<Input type="text" name="text" value={foodName} onChange={handleChange} />)}
      </StyledLabel>
    </DishSearchWrapper>
  );
};

export default connect(null, { getDishes, clearSearchMeals })(DishSearch);
