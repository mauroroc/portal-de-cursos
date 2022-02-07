import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function LayoutPortal({children}) {
  const[isSidebarOpen, setIsSidebarOpen] = useState(false)  
  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  return (
    <div>
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <Topbar onOpen={openSidebar} />
        {children}
    </div>
  )
}