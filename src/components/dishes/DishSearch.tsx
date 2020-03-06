import * as React from 'react';
import { DishSearchWrapper, Input, StyledLabel } from './Style.dishes';
import { ReactComponent as SearchIcon } from '../../utils/images/search.svg';
import useToggle from '../../hooks/useToggle';

interface P {

}

const DishSearch: React.FC<P> = () => {
  const [foodName, setfoodName] = React.useState<string>('');
  const [showInput, toggleInput] = useToggle(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfoodName(e.target.value);
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
export default DishSearch;
