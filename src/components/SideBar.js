import React from 'react'

const SideBar = ({ isOpen }) => {

  return (

    <div className={`sidebar ${isOpen ? 'open' : ''}`}>

        <div className='sidebarContainer'>

          <div className="sidebar_links">

            <a href="/">HOME</a>
            <a href="/">ABOUT</a>
            <a href="/">MENU</a>

          </div>

        </div>

    </div>

  )

}

export default SideBar