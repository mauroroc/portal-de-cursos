import React from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import Logo from './assets/img/logo-infnet.png'
import Banner from './assets/img/banner.jpg'

function App() {
  return (
    <>
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
      <main>
        <Container>
          <div className='shadow border my-3 p-4 banner-home'>
            <div>
              <h1>Bem vindo ao Infnet!</h1>
              <p>Conheça nossos curso de tecnologia</p>
              <p>Faça sua inscrição agora mesmo</p>
              <Button href="'/cursos" className="mb-2">CURSOS</Button>
            </div>
            <div>
              <img src={Banner} alt="banner" className="img-fluid" />
            </div>          
          </div>
        </Container>
        
      </main>
    </>
  );
}

export default App;
