/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';


export const PrimaryBtn = styled.button`
  padding: .4rem .6rem;
  font-size: 1.2rem;
  outline: none;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: .7rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  width: 13rem;
  position: relative;
  cursor: pointer;
  letter-spacing: .1rem;
  text-transform: capitalize;
  transition:${({ theme }) => theme.transition.mainTransition};
  &:active{
    top: 4px;
  }
  &:hover{
    background: ${({ theme }) => theme.colors.common};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${(props) => props.theme.shadow.darkShadow};
  }
`;
