import React, { useState } from 'react'
import MenuData from '../../data/data.js'
import OurMenu from '../OurMenu.js'
import '../../styles/menu.css'

const Menu = () => {

  const FoodTypes = {
    All: "All", 
    MainDish: "Main Dish",
    Drink: "Drink",
    Desert: "Desert"
  }

  const [filteredData, setFilteredData] = useState(MenuData)
  const [activeButton, setActiveButton] = useState(FoodTypes.All)

  const foodTypeChangeHandler = (foodType) => {

    if(foodType === FoodTypes.All)
    {
      setFilteredData(MenuData)
      setActiveButton(FoodTypes.All)
    }
    else {
      setFilteredData(filteredDatas => {
        return MenuData.filter((res) => res.foodType === foodType)
      })
      setActiveButton(foodType)
    }

  }

  return (

    <div className='menu_container'>

      <p className='menu_page_title first_section_title'>Our Menu</p>
      <p className='menu_page_explanation first_section_explanation'>List of the foods that we cook & serve with love</p>

      <div className='menu_page_food_type_button_list'>

        <button type='button' className = { activeButton === FoodTypes.All ? 'active' : '' } onClick={() => foodTypeChangeHandler(FoodTypes.All)}>All</button>
        <button type='button' className = { activeButton === FoodTypes.MainDish ? 'active' : '' }  onClick={() => foodTypeChangeHandler(FoodTypes.MainDish)}>Main Dishes</button>
        <button type='button' className = { activeButton === FoodTypes.Drink ? 'active' : '' }  onClick={() => foodTypeChangeHandler(FoodTypes.Drink)}>Drinks</button>
        <button type='button' className = { activeButton === FoodTypes.Desert ? 'active' : '' }  onClick={() => foodTypeChangeHandler(FoodTypes.Desert)}>Deserts</button>

      </div>

      <OurMenu datas={filteredData}/>

    </div>

  )

}

export default Menu