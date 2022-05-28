//import { Link } from 'react-router-dom';
import {  Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function BootstrapNav () {
    return (
        <div className="Navbar">
          <Navbar bg="dark" variant="dark" sticky="top">

              <Nav>
                  <NavDropdown title="Products">
                      <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                      <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                      <NavDropdown.Item href="/menu">Menu</NavDropdown.Item>
                      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  </NavDropdown>
                      <Nav.Link href="">Blog</Nav.Link>
                      <Nav.Link href="about">About Us</Nav.Link>
                      <Nav.Link href="menu">Menu</Nav.Link>
                      <Nav.Link href="login">Login</Nav.Link>     
                  </Nav>
              </Navbar>
              </div>
    )
}

export default BootstrapNav;