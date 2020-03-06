import styled from 'styled-components';
import { FlexStyle } from '../styled/GlobalStyles';
import { FadeIn, LightSpeedIn } from '../styled/animations';

export const DishesWrapper = styled.div`
  ${FlexStyle};
  height: 100%;
`;


export const DishSearchWrapper = styled.section`
  ${FlexStyle}
  width: 80%;
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
    width: 60%;
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
