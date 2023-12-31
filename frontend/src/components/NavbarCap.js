import './NavbarCap.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCap({handleHome, handleMenu,handleLogin}){

    return (
      <Navbar expand="lg" className="navbar-background-color">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" onClick={handleLogin}>Login</Nav.Link>
              <Nav.Link href="#" onClick={handleHome}>Home</Nav.Link>
              <Nav.Link href="#" onClick={handleMenu}>Menu</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
 
export default NavbarCap;