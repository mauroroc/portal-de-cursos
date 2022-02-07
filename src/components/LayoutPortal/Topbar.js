import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export function Topbar({onOpen}) {
  return (
    <Navbar bg="light" variant="light" expand='lg'>
      <Container fluid>
        <Navbar.Toggle onClick={onOpen} />
        <Nav className="ms-auto">
          <Dropdown align='end'>
            <Dropdown.Toggle variant="light">
              Teste
            </Dropdown.Toggle>
            <Menu>
              <Dropdown.Item>Sair</Dropdown.Item>
            </Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

const Menu = styled(Dropdown.Menu)`
  position: absolute !important;
`