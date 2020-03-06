import styled from 'styled-components';
import { FlexStyle } from '../GlobalStyles';

interface ITitle{
  mainSize?: string;
  subSize?: string;

}


export const StyledTitle = styled.div`
  ${FlexStyle};

  width: 75%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  position: relative;
  margin: 3rem auto;
  letter-spacing: .1rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  @media(min-width:588px){
    flex-direction: row;
  }
  &:after{
    content:'';
    width: 55%;
    height: 1px;
    padding: .1rem;
    background: ${(props) => props.theme.colors.primary};
    position: absolute;
    bottom: 28px;
  }
`;
export const StyledMainTitle = styled.h3<ITitle>`
  font-size: ${({ mainSize }) => (mainSize || '2rem')};
  padding: 0 .8rem 0 0;
`;
export const StyledSubTitle = styled.h5<ITitle>`
  font-size: ${({ subSize }) => (subSize || '1.5rem')};
  padding: 0 0 0 .8rem;
`;
