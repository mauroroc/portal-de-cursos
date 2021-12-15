import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from './assets/img/logo-infnet.png'

function App() {
  return (
    <header>
      <Navbar expand="md" className="main-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cursos">Cursos</Nav.Link>          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default App;
