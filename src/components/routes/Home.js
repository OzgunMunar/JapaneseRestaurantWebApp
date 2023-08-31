import React from 'react'
import LocationCarousel from '../LocationCarousel.js'

const Home = () => {

  return (

    <div className='home_page_container'>

        <section className="first_section">

            <div className="first_section_text">
               <h1 className="first_section_title">THE BEST PLACE TO EAT SUSHI IN THE CITY</h1>
               <p className="first_section_explanation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat condimentum et. Ut et ut maecenas amet ipsum accumsan fermentum.</p>
            </div>

            <div className="first_section_buttons">
               <button type="button" className="first_section_reserve_button">RESERVATE</button>
               <button type="button" className="first_section_orderonline_button">ORDER ONLINE</button>
            </div>

        </section>

        <section className="second_section">

            <div className="second_section_images">
                <img loading='lazy' src="images/section1_1.jpg" alt="Chef's seasoning a salad." />
                <img loading='lazy' src="images/section1_2.jpg" alt="Well sorted sushi table with sauce." />
                <img loading='lazy' src="images/section1_3.jpg" alt="A food on the table" />
            </div>

            <h1 className="second_section_text">Available in all delivery platforms</h1>

            <div className="second_section_applist_container">

                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c0773e8910629daf4beef_uber-eats-logo-gray-sushi-webflow-ecommerce-template.svg" alt="uber logo" />
                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c077350d68d986102ff66_doordash-logo-gray-sushi-webflow-ecommerce-template.svg" alt="door dash logo" />
                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c0774a82b764bf900c2a9_postmates-logo-gray-sushi-webflow-ecommerce-template.svg" alt="post mates logo" />
                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c0774dacd1518fbc784e4_rappi-logo-gray-sushi-webflow-ecommerce-template.svg" alt="rappi logo" />
                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c0774c34605a974f83b85_grubhub-logo-gray-sushi-webflow-ecommerce-template.svg" alt="grubhub logo" />
        
            </div>

        </section>

        <div className="horizontal_line"></div>

        <section className="third_section">

            <div className="third_section_first_half">
                <img src="./images/section2_1.jpg" alt="chef cooks a food with love" />
            </div>

            <div className="third_section_second_half">
                <h1 className="third_section_title">Delicious and hearty food made with delicious and hearty food.</h1>
                <p className="third_section_explanation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat condimentum et. Ut et ut maecenas amet ipsum accumsan fermentum.</p>
            </div>

        </section>

        <div className="horizontal_line"></div>

        <LocationCarousel />

    </div>
    
  )
}

export default Home