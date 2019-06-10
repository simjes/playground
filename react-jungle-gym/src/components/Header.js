import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const Header = () => {
  return (
    <Root>
      <nav>
        <MenuItem to='/' exact activeClassName='active-route'>
          Home
        </MenuItem>

        <MenuItem to='/locations' exact activeClassName='active-route'>
          Locations
        </MenuItem>
      </nav>
    </Root>
  );
};

export default Header;

const MenuItem = styled(NavLink)`
  padding: 1rem;

  &.active-route {
    color: ${props => props.theme.primaryColor};
  }
`;

const Root = styled.header`
  background-color: ${props => props.theme.foregroundColor};
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
`;
