import { CloseButton, Nav } from "react-bootstrap";
import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";

const menuItems = [
  {
    to: '/portal',
    text: 'Dashboard'
  },
  {
    to: '/portal/cursos',
    text:'Cursos'
  }
]

export function Sidebar({ onClose, isOpen }) {
  return (
    <SidebarStyled isOpen={isOpen} className="bg-dark text-white flex-column p-3">
      <CloseButton onClick={onClose} variant="white" className="ms-auto d-lg-none"/>
      <p className="h1">Portal Infnet</p>
      <hr />
      <Nav variant="pills" className="flex-column">
        {menuItems.map((item, index)=> (
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