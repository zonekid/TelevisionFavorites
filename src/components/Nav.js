import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import remote from '../assets/remote.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const NavStyles = styled.div `
.nav-link {
    font-family: KidsCorner-Regular;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
text-decoration: underline;
font-size: 18px;
text-align:center;
};
`

const NavBar = () => {
    return ( 
        <NavStyles>
<Navbar bg="light" variant="light" expand="lg">
<Container>
  <Navbar.Brand href="/"> <img
        src={remote}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Remote Control"
      /></Navbar.Brand>
       
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/lucy">I Love Lucy</Nav.Link>
      <Nav.Link href="/twin-peaks">Twin Peaks</Nav.Link>
      <Nav.Link href="/twilight">The Twilight Zone</Nav.Link>
      <Nav.Link href="/atlanta">Atlanta</Nav.Link>
      <Nav.Link href="/golden">The Golden Girls</Nav.Link>
      <Nav.Link href="/thrones">Game of Thrones</Nav.Link>
      <Nav.Link href="/wire">The Wire</Nav.Link>
      <Nav.Link href="#/sopranos">The Sopranos</Nav.Link>
      <Nav.Link href="martin">Martin</Nav.Link>
      <Nav.Link href="/prince">The Fresh Prince</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</NavStyles>
     );
}
 
export default NavBar;