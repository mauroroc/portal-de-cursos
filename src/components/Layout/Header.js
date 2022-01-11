import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo-infnet.png'

export function Header() {
    return (
      <header>
          <Navbar expand="md" className="main-navbar">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img src={Logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/cursos">Cursos</Nav.Link>          
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
  }