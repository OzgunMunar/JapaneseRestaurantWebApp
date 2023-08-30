import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({ isOpen, toggleSidebar }) => {

  return (
    
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>

        <div className='sidebarContainer'>

          <div className="sidebar_links">

            <Link to="/" onClick={toggleSidebar}>HOME</Link>
            <Link to="/about" onClick={toggleSidebar}>ABOUT</Link>
            <Link to="/menu" onClick={toggleSidebar}>MENU</Link>

          </div>

        </div>

    </div>

  )

}

export default SideBar