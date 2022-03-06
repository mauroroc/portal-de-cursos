import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo-infnet.png'
import { selectIsUserLoggedIn } from '../../store/User/User.selectors'

export function Header() {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
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
                  {isUserLoggedIn ? (
                    <Nav.Link as={Link} to="/portal">Acessar Portal</Nav.Link>
                  ) : (
                    <Nav.Link as={Link} to="/portal/login">Login</Nav.Link>
                  )}          
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
  }