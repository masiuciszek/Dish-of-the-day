/* eslint-disable import/extensions */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar, StyledNavList } from './Styled.navbar';

interface P {

}

const Navbar: React.FC<P> = () => {
  const [navLinks, setNavLinks] = React.useState([
    {
      id: 1,
      title: 'home',
      path: '/',
    },
    {
      id: 2,
      title: 'randomDish',
      path: '/randomdish',
    },
  ]);
  return (
    <StyledNavbar>
      <StyledNavList>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </StyledNavList>
    </StyledNavbar>
  );
};
export default Navbar;
