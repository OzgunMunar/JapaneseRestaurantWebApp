import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

import {Navigation } from 'swiper/modules';
import SlideExplanation from './SlideExplanation'

export default function App() {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className='swiper_image_container'>
            <img src="images/restaurant_1.jpg" alt="Chef's seasoning a salad." />
          </div>
          <SlideExplanation slideAddress='CHINATOWN, LA' slideOpenAddress='934-235 N. Broadway Los Angeles, CA 90334' slideMail='contact@arigato.com' slidePhoneNumber='(414) 345 - 3245'/>
        </SwiperSlide>

        <SwiperSlide>
            <div className='swiper_image_container'>
              <img src="images/restaurant_2.jpg" alt="Chef's seasoning a salad." />
            </div>
            <SlideExplanation slideAddress='TORONTO, ON' slideOpenAddress='333-145 N. Queen St. Toronto, CA 90234' slideMail='contact@arigato.com' slidePhoneNumber='(414) 345 - 3322'/>
        </SwiperSlide>

        <SwiperSlide>
            <div className='swiper_image_container'>
              <img src="images/restaurant_3.jpg" alt="Chef's seasoning a salad." />
            </div>
            <SlideExplanation slideAddress='OTTAWA, ON' slideOpenAddress='1-23 N. King St. Toronto, CA 22334' slideMail='contact@maligato.com' slidePhoneNumber='(414) 222 - 6655'/>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
