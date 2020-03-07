import styled from 'styled-components';


export const StyledNavbar = styled.nav`
  padding: 1rem;
`;


export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  li {
    padding: .5rem;
    a{
      text-decoration: none;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.2rem;
      transition: ${({ theme }) => theme.transition.mainTransition};
      padding: .5rem;
      border-radius: 0 0 .4rem 0;
      &:hover{
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.primary};
        box-shadow: ${({ theme }) => theme.shadow.lightShadow};
      }
    }
  }
`;
