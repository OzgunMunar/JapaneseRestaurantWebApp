import React, { useState, useEffect }  from 'react'
import '../components/navbarToggle.css'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [toggleButton, setToggleButton] = useState(false)
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)

  const updateInnerWidth = () => {
    setWindowInnerWidth(window.innerWidth)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {

    (windowInnerWidth <= 1000) ? setToggleButton(true) : setToggleButton(false)

    window.addEventListener('resize', updateInnerWidth)

    return () => {
      window.removeEventListener('resize', updateInnerWidth)
    };
  }, [windowInnerWidth])

  return (

    <div className="navbar">

        <div className="logo">
            .x ARIGATO x.
        </div>

        {
          (toggleButton === true) ?

            <div className={`toggle ${(menuOpen) ? 'active' : ''}`} onClick={toggleMenu}>

              <span></span>
              <span></span>
              <span></span>
          
            </div>

            :
            <div className="navbar_links">
              <a href="/">HOME</a>
              <a href="/">ABOUT</a>
              <a href="/">MENU</a>
            </div>

          }
        
    </div>

  )
  
}

export default Navbar