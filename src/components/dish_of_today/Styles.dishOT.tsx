import styled from 'styled-components';


export const DishOfTodayWrapper = styled.div`
  /* TODO: DELETE */
  border: 2px solid blue;
  height: 100%;
`;

export const BtnWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const DishWrapper = styled.section`
/* TODO: DELETE */
  border: 2px solid red;
  padding: 1rem 3rem;
    /* display: flex;
    flex-wrap: wrap; */
  @media(min-width: 1000px){
    /* display: grid;
    grid-template-columns:  */

  }
`;

export const StyledDishDisplay = styled.div`

`;
export const StyledDishHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 1rem 3rem;
  margin: 0 auto;
  .img,.title{
    padding: .5rem;
  }
  img{
    max-width: 230px;
    border-radius: .5rem;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  h3{
    font-size: 2rem;
    letter-spacing: .1rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    padding: .5rem;
    border-radius: .5rem;
    box-shadow:  ${(props) => props.theme.shadow.lightShadow};
  }
`;


export const StyledIngredientsList = styled.div`
  display: flex;
  flex-direction: column;
  /* TODO: DELETE */
  border: 2px solid red;
  width: 80%;
  margin: 0 auto;
`;
