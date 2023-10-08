import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import NavLink from './NavLink';

const Navigation = () => {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="position-sticky top-0 w-100"
        style={{ zIndex: 1000 }}
      >
        <Container>
          <Navbar.Brand href="/">Flog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {['posts', 'Category', 'Tag'].map((element: string) => (
                <NavLink key={element} element={element} />
              ))}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
