import React, { useState, useLayoutEffect } from 'react'
import MenuData from '../../data/data.js'
import OurMenu from '../OurMenu.js'

const Menu = () => {

  const [data, setData] = useState([])

  useLayoutEffect(() => {

    setData(MenuData)

  }, [])

  return (
    <div className='menu_container'>
      <p>Menu Page</p>
      {/* <div className='our_menu_'>

      </div> */}
      <OurMenu datas={data}/>
    </div>
  )
}

export default Menu