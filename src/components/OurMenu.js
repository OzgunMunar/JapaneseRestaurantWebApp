import React from 'react'
import '../styles/menu.css'

const OurMenu = ({ datas }) => {
  return (
    <div className='our_menu_container'>

    {datas?.map((item) => {

      return (
      <div className='our_menu_item'>
        <img className='our_menu_item_image' src={item.foodImageLink} alt='ss' />
        <p>{item.foodName}</p>
        <p>{item.foodIngredients}</p>
        <p>{item.foodPrice}</p>
        <p>{item.foodType}</p>
      </div>
      )
    })}

  </div>
  )
}

export default OurMenu