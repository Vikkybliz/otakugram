import './App.css';
import './index.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/' className='brand' >Otaku Gram</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/phonepaper' >WallPaper</Nav.Link>
              <Nav.Link href='/qoutes' >Anime Qoutes</Nav.Link>
              <Nav.Link href='/contact' >Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>      
  );
}

export default Navigation;