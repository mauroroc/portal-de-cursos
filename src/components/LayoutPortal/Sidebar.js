import { CloseButton, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";
import { selectUser } from "../../store/User/User.selectors";

const menuItems = [
  {
    to: '/portal',
    text: 'Dashboard',
    checkAllPath: true,
    userTypes: [1,2]
  },
  {
    to: '/portal/cursos',
    text:'Cursos',
    checkAllPath: false,
    userTypes: [1]
  },
  {
    to: '/',
    text:'Ir para o Site',
    checkAllPath: true,
    userTypes: [2]
  }
]

export function Sidebar({ onClose, isOpen }) {
  const user = useSelector(selectUser)
  const menuItemsFiltered = menuItems.filter(item=> item.userTypes.includes(user.type))
  return (
    <SidebarStyled isOpen={isOpen} className="bg-dark text-white flex-column p-3">
      <CloseButton onClick={onClose} variant="white" className="ms-auto d-lg-none"/>
      <p className="h1">Portal Infnet</p>
      <hr />
      <Nav variant="pills" className="flex-column">
        {menuItemsFiltered.map((item, index)=> (
         <SidebarItem key={index} item={item} />
        ))}
      </Nav>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.header`  
width: 280px;
@media (max-width: 991px) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  margin-left: ${props => props.isOpen ? '0' : '-100%'};
  transition: all .3s; 
}
`