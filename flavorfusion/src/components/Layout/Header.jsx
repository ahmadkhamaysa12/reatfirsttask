import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaUtensils } from 'react-icons/fa'

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom sticky-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom">
          <FaUtensils className="me-2" />
          FlavorFusion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link-custom" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/pizza" className="nav-link-custom">Pizza</Nav.Link>
            <Nav.Link as={NavLink} to="/category/burger" className="nav-link-custom">Burger</Nav.Link>
            <Nav.Link as={NavLink} to="/category/pasta" className="nav-link-custom">Pasta</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={NavLink} to="/privacy" className="nav-link-custom">Privacy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header