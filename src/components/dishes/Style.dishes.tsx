import styled from 'styled-components';
import { FlexStyle } from '../styled/GlobalStyles';
import { FadeIn, LightSpeedIn } from '../styled/animations';

export const DishesWrapper = styled.div`
  ${FlexStyle};
  height: 100%;
`;


export const DishSearchWrapper = styled.section`
  ${FlexStyle}
  width: 65%;
  background: ${(props) => props.theme.colors.primary};
  border-radius:1rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
`;

export const StyledLabel = styled.label`
  padding: .6rem;
  ${FlexStyle};
  flex-direction: row;
  width: 84%;
  transition: ${(props) => props.theme.transition.mainTransition};

  span{
    margin-right: auto;
    cursor: pointer;
    svg{
      circle,line{
      stroke: #fff
      }
    }
  }
  @media(min-width:1200px){
    /* width: 60%; */
    width: 100%;
  }

`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 15%;
  margin-right: auto;
  outline: none;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  border-radius: 1rem;
  font-size:1.1rem;
  padding: .3rem .5rem;
  transition: ${(props) => props.theme.transition.mainTransition};
  animation: ${LightSpeedIn} 500ms ease-in-out;
  font-size: 1.3rem;
  &:focus{
    width: 100%;
    box-shadow: ${(props) => props.theme.shadow.darkShadow};
    border: 2px solid ${({ theme }) => theme.colors.common};
  }
`;


export const DishItemGrid = styled.div`

  width: 100%;
@media(min-width: 800px ){
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 20px;
  }
`;

export const StyledDishItem = styled.div`
  ${FlexStyle};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius:1rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  margin: 1rem;
  padding: .4rem;
  letter-spacing: .1rem;
  position: relative;
  transition: ${(props) => props.theme.transition.mainTransition};
  .content{
    display: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }
  strong,span{
    z-index: 2;
    font-size: 1.2rem;
    margin: .4rem;
  }
  span{
    color: ${(props) => props.theme.colors.common};

  }
  @media(min-width: 800px ){
    width: 80%;
  }

  &:hover{
    .content{
      display:block;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
    }
    box-shadow: ${(props) => props.theme.shadow.darkShadow};
  }

  &::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,0.7);
    border-radius: 1rem;
  }

`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`;
