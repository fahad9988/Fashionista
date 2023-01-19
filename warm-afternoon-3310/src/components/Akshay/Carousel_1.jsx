import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";
import React from 'react'

const ImageSlider = () => {
    const images = [{
        id: 1,
        src: "https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpgg",
        alt: "Image 1"
    },
    {
        id: 3,
        src: "https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg",
        alt: "Image 3"
    },
    {
        id: 4,
        src: "	https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg",
        alt: "Image 4"
    },
    {
        id: 5,
        src: "https://n4.sdlcdn.com/imgs/k/k/z/web_banner_07-092e2.jpg",
        alt: "Image 4"
    }
    ];
  const settings = {
    infinite: true,
    dots:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 3000,
   
  };
  return (
    <>

      <div style={{width:"80%" }}>
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <Image src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}
export default ImageSlider;