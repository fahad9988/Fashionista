import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image,Text } from "@chakra-ui/react";
import React from 'react'
import { useState } from "react";

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
  const [state,setState]=useState()
  const id=setInterval(()=>{

  },1000)
  return (
    <>

      <Box w={["100%","100%","100%","80%"]}>
        <Slider {...settings}>
          {images.map((item) => (
            <Box key={item.id}>
              <Image src={item.src}  alt={item.alt} />
            </Box>
          ))}
        </Slider>
        <Box display="flex" fontSize={"xs"}   mt="-2" color="gray" border={"1px solid gray"} bgColor="white">
            <Box width="25%"  borderRight={"1px solid gray"}><Text   textAlign="center">BOB</Text></Box>
            <Box width="25%"  borderRight={"1px solid gray"}><Text   textAlign="center">Western Wear</Text></Box>
            <Box width="25%"  borderRight={"1px solid gray"}><Text   textAlign="center">Kitchen Needs</Text></Box>
            <Box width="25%" ><Text  textAlign="center">Kurti Sets</Text></Box>
        </Box>
      </Box>
      
          </>
  )
}
export default ImageSlider;