import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../services/User.service";
import { userLogout } from "../../store/User/User.actions";
import { selectUser } from "../../store/User/User.selectors";

export function Topbar({onOpen}) {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    logout()    
    dispatch(userLogout())
    navigate('/portal/login')
  }
  return (
    <Navbar bg="light" variant="light" expand='lg'>
      <Container fluid>
        <Navbar.Toggle onClick={onOpen} />
        <Nav className="ms-auto">
          <Dropdown align='end'>
            <Dropdown.Toggle variant="light">
              {user.name}
            </Dropdown.Toggle>
            <Menu>
              <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
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