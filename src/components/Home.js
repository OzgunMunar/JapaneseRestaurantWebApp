import React from 'react'
import LocationCarousel from '../components/LocationCarousel.js'

const Home = () => {

  return (

    <div>

        <section class="first_section">

            <div class="first_section_text">
               <h1 class="first_section_title">THE BEST PLACE TO EAT SUSHI IN THE CITY</h1>
               <p class="first_section_explanation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat condimentum et. Ut et ut maecenas amet ipsum accumsan fermentum.</p>
            </div>

            <div class="first_section_buttons">
               <button type="button" class="first_section_reserve_button">RESERVATE</button>
               <button type="button" class="first_section_orderonline_button">ORDER ONLINE</button>
            </div>

        </section>

        <section class="second_section">

            <div class="second_section_images">
                <img src="images/section1_1.jpg" alt="Chef's seasoning a salad." />
                <img src="images/section1_2.jpg" alt="Well sorted sushi table with sauce." />
                <img src="images/section1_3.jpg" alt="A food on the table" />
            </div>

            <h1 class="second_section_text">Available in all delivery platforms</h1>

            <div class="second_section_applist_container">

                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c0773e8910629daf4beef_uber-eats-logo-gray-sushi-webflow-ecommerce-template.svg" alt="uber logo" />
                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c077350d68d986102ff66_doordash-logo-gray-sushi-webflow-ecommerce-template.svg" alt="door dash logo" />
                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c0774a82b764bf900c2a9_postmates-logo-gray-sushi-webflow-ecommerce-template.svg" alt="post mates logo" />
                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c0774dacd1518fbc784e4_rappi-logo-gray-sushi-webflow-ecommerce-template.svg" alt="rappi logo" />
                <img src="https://assets.website-files.com/620bd9d9a0ed1136544c90f3/620c0774c34605a974f83b85_grubhub-logo-gray-sushi-webflow-ecommerce-template.svg" alt="grubhub logo" />
        
            </div>

        </section>

        <div class="horizontal_line"></div>

        <section class="third_section">

            <div class="third_section_first_half">
                <img src="./images/section2_1.jpg" alt="chef cooks a food with love" />
            </div>

            <div class="third_section_second_half">
                <h1 class="third_section_title">Delicious and hearty food made with delicious and hearty food.</h1>
                <p class="third_section_explanation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus facilisis feugiat condimentum et. Ut et ut maecenas amet ipsum accumsan fermentum.</p>
            </div>

        </section>

        <div class="horizontal_line"></div>

        <LocationCarousel />

        <div class="horizontal_line"></div>

    </div>
    
  )
}

export default Home