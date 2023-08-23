import React from 'react'

const SlideExplanation = ({slideAddress, slideOpenAddress, slideMail, slidePhoneNumber}) => {
  return (
    <div className='slide_explanation'>
        <h3 className='slide_address'>{slideAddress}</h3>
        <h5 className='slide_open_address'>{slideOpenAddress}</h5>
        <p className='slide_mail'>{slideMail}</p>
        <p className='slide_phone_number'>{slidePhoneNumber}</p>
    </div>
  )
}

export default SlideExplanation