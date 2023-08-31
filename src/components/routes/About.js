import React from 'react'
import LocationCarousel from '../LocationCarousel'
import '../../styles/about.css'

const About = () => {

  return (

    <div className='about_page_container'>

      <div className='about_the_restaurant_first_section'>

        <div className='first_section'>
    
          <div className='first_section_text'>
    
            <div className='first_section_title'>
              ABOUT OUR JAPANESE RESTAURANT
            </div>

            <div className='first_section_explanation'>
              It's been an extremely exciting journey to spend every minute to develop this perfect restaurant to make all guests happy.
            </div>
          
          </div>

        </div>

        <div className='about_the_restaurant_image_section'>
          
          <img className='about_the_restaurant_chef_photo' src='images/horizontal_sushi_maker.jpg' alt='horizontal sushi maker chef' />

        </div>

        <div className='about_the_restaurant_numbers'>

          <div className='about_the_restaurant_number_container'>

            <div className='about_the_restaurant_number'>
              <p className='bold_text'>3</p>
              <p>LOCATIONS</p>
            </div>

            <div className='about_the_restaurant_number'>
              <p className='bold_text'>1994</p>
              <p>FOUNDED</p>
            </div>

            <div className='about_the_restaurant_number'>
              <p className='bold_text'>10+</p>
              <p>MEMBERS</p>
            </div>

            <div className='about_the_restaurant_number'>
              <p className='bold_text'>100%</p>
              <p>SATISFACTION</p>
            </div>

          </div>

        </div>

      </div>

      <div className='horizontal_line'></div>

      <div className='about_the_restaurant_second_section'>

        <div className='about_the_restaurant_second_section_title'>
          TESTIMONIALS
        </div>

        <div className='about_the_restaurant_testimonials'>
          
          <div className='about_the_restaurant_testimonial'>

            <img className='testimonial_photo' src='https://randomuser.me/api/portraits/men/36.jpg' alt=''/>

            <div className='testimonial_text'>
              <p className='testimonial_explanation'>Consequat duis velit excepteur nostrud pariatur ipsum. Nulla Lorem Lorem cillum exercitation exercitation do adipisicing reprehenderit aliquip ullamco incididunt id. Ullamco proident dolore elit exercitation ad. Pariatur dolore ullamco sint adipisicing nulla pariatur excepteur minim. Eu irure ea commodo velit eu cupidatat cupidatat eu sint dolore deserunt ullamco eu ad. Consequat culpa deserunt adipisicing sunt eu proident excepteur voluptate pariatur nostrud consequat ea minim tempor.</p>
              <p className='testimonial_fullname'>Rosa Andre</p>
            </div>

          </div>

          <div className='about_the_restaurant_testimonial'>

            <img className='testimonial_photo' src='https://randomuser.me/api/portraits/women/14.jpg' alt=''/>
            
            <div className='testimonial_text'>
              <p className='testimonial_explanation'>Consequat duis velit excepteur nostrud pariatur ipsum. Nulla Lorem Lorem cillum exercitation exercitation do adipisicing reprehenderit aliquip ullamco incididunt id. Ullamco proident dolore elit exercitation ad. Pariatur dolore ullamco sint adipisicing nulla pariatur excepteur minim. Eu irure ea commodo velit eu cupidatat cupidatat eu sint dolore deserunt ullamco eu ad. Consequat culpa deserunt adipisicing sunt eu proident excepteur voluptate pariatur nostrud consequat ea minim tempor.</p>
              <p className='testimonial_fullname'>Angelia Paige</p>
            </div>

          </div>

          <div className='about_the_restaurant_testimonial'>

            <img className='testimonial_photo' src='https://randomuser.me/api/portraits/women/33.jpg' alt=''/>

            <div className='testimonial_text'>
              <p className='testimonial_explanation'>Consequat duis velit excepteur nostrud pariatur ipsum. Nulla Lorem Lorem cillum exercitation exercitation do adipisicing reprehenderit aliquip ullamco incididunt id. Ullamco proident dolore elit exercitation ad. Pariatur dolore ullamco sint adipisicing nulla pariatur excepteur minim. Eu irure ea commodo velit eu cupidatat cupidatat eu sint dolore deserunt ullamco eu ad. Consequat culpa deserunt adipisicing sunt eu proident excepteur voluptate pariatur nostrud consequat ea minim tempor.</p>
              <p className='testimonial_fullname'>Alyx Prue</p>
            </div>

          </div>

        </div>
        
      </div>

      <div className='horizontal_line'></div>

      <LocationCarousel />

    </div>

  )

}

export default About