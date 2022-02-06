import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleToogleSidebar = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div>
      <Navbar handleToogleSidebar={handleToogleSidebar} />

      <Sidebar
        handleToogleSidebar={handleToogleSidebar}
        isOpen={isSidebarOpen}
      />

      <div>{children}</div>
    </div>
  )
}

export default Layout
