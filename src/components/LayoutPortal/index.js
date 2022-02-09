import { useState } from "react";
import { Container } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function LayoutPortal({children}) {
  const[isSidebarOpen, setIsSidebarOpen] = useState(false)  
  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  return (
    <div className="d-flex flex-grow-1">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <div className="flex-fill">
          <Topbar onOpen={openSidebar} />
          <Container fluid>
            {children}
          </Container>
        </div>
    </div>
  )
}