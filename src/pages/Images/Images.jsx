import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Images.css";
import image00 from "../../assets/image00.jpg";
import image01 from "../../assets/image01.jpg";
import image02 from "../../assets/image02.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";

const Images = () => {
  const images = [
    {
      url: image00,
    },
    {
      url: image01,
    },
    {
      url: image02,
    },
  ];
  return (
    <>
      <Navbar />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((i, index) => {
          return (
            <SwiperSlide>
              <img src={i.url} alt="tent" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Footer />
    </>
  );
};

export default Images;
