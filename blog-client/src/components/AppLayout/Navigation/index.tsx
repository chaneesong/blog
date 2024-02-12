import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const NavbarWrapper = styled.div`
  width: 100%;
  max-height: 88px;
  background-color: #1c2128;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Logo = styled.div`
  img {
    height: 40px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  @media screen and (max-width: 812px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin-right: 15px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 10px;

  @media screen and (max-width: 812px) {
    width: 100%;
  }
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 812px) {
    display: block;
  }
`;

const ModalOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
  align-items: center;
  z-index: 2;

  &.active {
    display: flex;
  }
`;

const ModalContent = styled.div`
  background-color: #1c2128;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  color: white;
  cursor: auto;
`;

const ModalList = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledClose = styled(CgClose)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: auto;
`;

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <NavbarWrapper>
      <Logo>
        <NavLink href="/">
          <img src="/logo.png" alt="Logo" />
        </NavLink>
      </Logo>
      <MobileIcon onClick={toggleModal}>
        <FaBars />
      </MobileIcon>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts">Posts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/category">Category</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tag">Tag</NavLink>
        </NavItem>
      </NavList>

      <ModalOverlay
        className={isModalOpen ? 'active' : ''}
        onClick={toggleModal}
      >
        <ModalContent onClick={stopPropagation}>
          <CloseWrapper>
            <StyledClose onClick={closeModal} />
          </CloseWrapper>
          <ModalList>
            <NavItem onClick={closeModal}>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem onClick={closeModal}>
              <NavLink href="/posts">Posts</NavLink>
            </NavItem>
            <NavItem onClick={closeModal}>
              <NavLink href="/category">Category</NavLink>
            </NavItem>
            <NavItem onClick={closeModal}>
              <NavLink href="/tag">Tag</NavLink>
            </NavItem>
          </ModalList>
        </ModalContent>
      </ModalOverlay>
    </NavbarWrapper>
  );
};

export default Navbar;
