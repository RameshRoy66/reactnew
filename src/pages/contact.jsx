import React from 'react'
import Layout from '../layout/layout'
import Form from '../components/Form'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../assets/2.jpg";



export default function contact() {
// Import Swiper styles

//   fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


  return (
    <Layout >
    <div >
    <div className="row container">
    <div className="col-sm-6">
    </div>    
      <div className="col-sm-6">
        <Form/>
        </div>
    </div>

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <img src={img1} className="d-block w-100 carimg" alt="..." />

      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} className="d-block w-100 carimg" alt="..." />

      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} className="d-block w-100 carimg" alt="..." />

      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} className="d-block w-100 carimg" alt="..." />

      </SwiperSlide>
    </Swiper>

    </div>
    </Layout>
  )
}
