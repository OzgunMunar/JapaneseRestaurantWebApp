import React from 'react'
import { nanoid } from 'nanoid'
import '../styles/menu.css'
import '../../src/AppAnimations.css'

const OurMenu = ({ datas }) => {

  return (

    <div className='our_menu_container'>

    {datas?.map((item) => {
      
      return (

        <div className='our_menu_item' key={nanoid()}>

          <div className='our_menu_item_image_container'>
              <img className='our_menu_item_image' src={item.foodImageLink} alt='ss' />
          </div>

          <div className='horizontal_line2'></div>

          <p className='our_menu_food_name'>{item.foodName}</p>
          <p>{item.foodIngredients}</p>
          <p>${item.foodPrice}</p>
          <p>({item.foodType})</p>
          
        </div>

      )

    })}

  </div>

  )

}

export default OurMenu