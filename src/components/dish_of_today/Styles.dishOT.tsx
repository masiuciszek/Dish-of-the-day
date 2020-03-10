import styled from 'styled-components';
import { FlexStyle } from '../styled/GlobalStyles';


export const DishOfTodayWrapper = styled.div`
  height: 100%;
`;

export const BtnWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const DishWrapper = styled.section`
  padding: 1rem 3rem;

  @media(min-width: 1000px){
    /* display: grid;
    grid-template-columns:  */
  }
`;

export const StyledDishDisplay = styled.div`

`;

export const StyledDishHeader = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow:  ${({ theme }) => theme.shadow.lightShadow};
  padding: 2rem 3rem;
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
    font-size: 1.8rem;
    letter-spacing: .1rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    padding: .5rem;
    border-radius: .5rem;
    box-shadow:  ${(props) => props.theme.shadow.lightShadow};
    span{
      color: ${(props) => props.theme.colors.common};
    }
  }
  @media(max-width: 980px){
    flex-direction: column;
    img{
      width: 100%;
    }
  }
  .foodType{
    position: absolute;
    top: .5rem;
    left: 1rem;
    background: ${(props) => props.theme.colors.primary};
    padding: .7rem;
    color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.shadow.lightShadow};
    display: flex;
    align-items: center;
    border-radius: .5rem;
    span,strong{
      font-size: 1.2rem;
    }
    span{
      color: ${(props) => props.theme.colors.common};
    }
    strong{
      margin-left: .4rem;
    }
  }
`;


export const StyledIngredientsList = styled.div`

  ${FlexStyle}
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  width: 80%;
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  h4{
    font-size: 2.2rem;
    padding: .6rem 1rem;
  }
  strong{
    font-size: 1.2rem;
    padding: .6rem 1rem;
    transition: ${(props) => props.theme.transition.mainTransition};
    &:hover{
      border-bottom: 1px solid ${(props) => props.theme.colors.white};
    }
  }

`;
