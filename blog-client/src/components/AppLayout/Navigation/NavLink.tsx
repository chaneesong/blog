import { useRouter } from 'next/router';
import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

interface NavLinkProps {
  element: string;
}

const StyledNavLink = styled(Nav.Link)`
  color: ${({ active }) => (active ? 'black' : 'grey')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

const NavLink = ({ element }: NavLinkProps) => {
  const router = useRouter();
  const { pathname } = router;

  const isActive = (link: string): boolean => {
    return pathname === link;
  };

  return (
    <StyledNavLink
      className={isActive(`/${element.toLowerCase()}`) ? 'active' : ''}
      href={`/${element.toLowerCase()}`}
    >
      {element === 'post' ? 'All Posts' : element}
    </StyledNavLink>
  );
};

export default NavLink;
