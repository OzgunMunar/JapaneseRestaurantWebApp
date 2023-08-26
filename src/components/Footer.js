import React from 'react'
import './footer.css'
import { CgFacebook, CgInstagram } from 'react-icons/cg';
import { VscTwitter } from 'react-icons/vsc'
import { TiSocialLinkedin } from 'react-icons/ti'

const Footer = () => {

  return (
    <div className='footer'>

        <div className='footer_upper_section'>

          <div className='footer_upper_section_left_text'>
            <h3 className='footer_upper_section_header'>Come and Visit Us!</h3>
            <p className="footer_upper_section_explanation">We will always try to cook the best food you've ever had so you have the best restaurant experience ever.</p>
            <img className='footer_upper_section_map_picture' src='/images/map.png' alt='google map location indicator' />
          </div>

          <div className='footer_upper_section_reservate'>
            <h3>Reservation</h3>
            <div className='footer_horizontal_line'></div>
            <h4>OPENING TIMES</h4>
            <p>Weekdays   09:00 - 22:00</p>
            <p>Saturday   10:00 - 20:00</p>
            <p>Sundays   09:00 - 22:00</p>
            <h4>BOOK A TABLE FOR LUNCH OR DINNER</h4>
          </div>

        </div>
        
        <div className='footer_lower_section'>

          <div className='footer_lower_left_section'>

<<<<<<< HEAD
            <div class="logo">
              ARIGATO
=======
            <div className="logo">
              .x ARIGATO x.
>>>>>>> 5487e09e13ce22f391226f1a13b201656a841f20
            </div>

          </div>

          <div className='footer_lower_right_section'>
            
            <div className='footer_lower_left_social_buttons'>

              <div className='facebook_logo_container'>
                <CgFacebook />
              </div>

              <div className='twitter_logo_container'>
                <VscTwitter />
              </div>

              <div className='instagram_logo_container'>
                <CgInstagram />
              </div>

              <div className='linkedin_logo_container'>
                <TiSocialLinkedin />
              </div>
              
            </div>

          </div>

        </div>

    </div>
  )
  
}

export default Footer