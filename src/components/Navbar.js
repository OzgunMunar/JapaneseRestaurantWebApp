import React, { useState, useEffect }  from 'react'
import '../styles/navbarToggle.css'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [toggleButton, setToggleButton] = useState(false)
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)

  const updateInnerWidth = () => { setWindowInnerWidth(window.innerWidth) }

  const toggleMenu = () => { setMenuOpen(!menuOpen) }

  useEffect(() => {

    (windowInnerWidth <= 1000) ? setToggleButton(true) : setToggleButton(false)

    window.addEventListener('resize', updateInnerWidth)

    return () => {
      window.removeEventListener('resize', updateInnerWidth)
    };
    
  }, [windowInnerWidth])

  return (

    <div className={`navbar ${(menuOpen) ? 'active' : ''}`}>

      <div className={`logo ${(menuOpen) ? 'active' : ''}`}> .x ARIGATO x. </div>

      {
        
        (toggleButton === true) ?

          <div className="main-content">
            <div className={`toggle ${(menuOpen) ? 'active' : ''}`} onClick={toggleMenu}>

              <span></span>
              <span></span>
              <span></span>

            </div>
            <SideBar isOpen={menuOpen} toggleSidebar={toggleMenu} />
          </div>
          :
          <div className="navbar_links">

            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/menu">MENU</Link>
            
          </div>

        }
        
    </div>

  )
  
}

export default Navbar