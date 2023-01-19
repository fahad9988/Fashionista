import {  Box ,Button,Icon} from "@chakra-ui/react"
import {BsArrowRightCircle,BsArrowLeftCircle} from "react-icons/bs";
import styled from"./Carousel2.module.css"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Divider } from '@chakra-ui/react'


let data=[
    {
        "image2": "https://www.rentomojo.com/bangalore/electronics/rent-oneplus-7-pro/91631",
        "image": "https://p.rmjo.in/productSquare/mxzy0xf9-500x500.jpg",
        "title": "OnePlus 7 Pro (Mirror Gray)",
        "price": "1669",
        "days": "3 days",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "id": 4
      },      {
        "id": 3000018,
        "image": "https://p.rmjo.in/productSquare/e2nc1yzg-500x500.jpg",
        "title": "LED TV - 40",
        "price": 1269,
        "stock": "available",
        "category": "telivision",
        "days": "3 days",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      },      {
        "id": 3000012,
        "image": "https://p.rmjo.in/productSquare/z227w1xz-500x500.jpg",
        "title": "Semi Automatic Washing Machine",
        "price": 479,
        "stock": "available",
        "category": "washingmachine",
        "days": "2 days",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      },    
    {
        "id": 300005,
        "image": "https://p.rmjo.in/productSquare/x0to9y4x-500x500.jpg",
        "title": "Mini Fridge",
        "price": 449,
        "stock": "available",
        "category": "fridge",
        "days": "3 days",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      },      
    {  "image": "https://p.rmjo.in/productSquare/sk1pofns-500x500.jpg",
      "title": "Aurora Wooden Queen Bed (6x5)",
      "price": 539,
      "stock": "available",
      "category": "bedroom",
      "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
      "days": "3 days",
      "id": 124
    },   {
        "image": "https://p.rmjo.in/productSquare/75pzthwi-500x500.jpg",
        "title": "Napster Metal Single Bed (6x3)",
        "price": 249,
        "stock": "available",
        "category": "bedroom",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "days": "3 days",
        "id": 7
      },
      {
        "image": "https://p.rmjo.in/productSquare/1eoam6o5-500x500.jpg",
        "title": "Poise Study Table",
        "price": 229,
        "stock": "available",
        "category": "wfh",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "days": "3 days",
        "id": 117
      },{
        "image": "https://p.rmjo.in/productSquare/s9wlr8o3-500x500.jpg",
        "title": "Poise Wooden King Bed (6x6)",
        "price": 669,
        "stock": "Out of stock",
        "category": "bedroom",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "days": "3 days",
        "id": 9
      },      {
        "image": "https://p.rmjo.in/productSquare/s31yoe0u-500x500.jpg",
        "title": "Stowy 2-Door Wardrobe",
        "price": 409,
        "stock": "available",
        "category": "bedroom",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "days": "3 days",
        "id": 18
      },      {
        "id": 1,
        "image": "https://p.rmjo.in/productSquare/em6h6xgy-500x500.jpg",
        "title": "Stuart Study Table",
        "price": "149",
        "o_price": "72"
      },      {
        "image": "https://p.rmjo.in/productSquare/akv269ws-500x500.jpg",
        "title": "Miller Office Chair",
        "price": 149,
        "stock": "available",
        "category": "living",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "days": "3 days",
        "id": 152
      },      {
        "image": "https://p.rmjo.in/productSquare/yunuytfl-500x500.jpg",
        "title": "Rowling Bookshelf Small",
        "price": 109,
        "stock": "available",
        "category": "bedroom",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "days": "3 days",
        "id": 23
      },   {
        "id": 300006,
        "image": "https://p.rmjo.in/productSquare/ry27prsa-500x500.jpg",
        "title": "Single Door Fridge (210 Litre)",
        "price": 809,
        "stock": "available",
        "category": "fridge",
        "days": "3 days",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      },      {
        "id": 3000013,
        "image": "https://p.rmjo.in/productSquare/zufkl87m-500x500.jpg",
        "title": "Microwave Solo 20L",
        "price": 299,
        "stock": "available",
        "category": "microwaveandinduction",
        "days": "3 days",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      }, {
        "image": "https://p.rmjo.in/productSquare/durxsu1c-500x500.jpg",
        "title": "Morris Office Chair",
        "price": 199,
        "stock": "available",
        "category": "living",
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "days": "3 days",
        "id": 151
      } , {
        "image": "https://p.rmjo.in/productSquare/4mb23xd0-500x500.jpg",
        "title": "Atticus Wooden Single Platform Bed (6x3)",
        "price": 339,
        "delivery": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg",
        "days": "3 days",
        "stock": "available",
        "category": "bedroom",
        "id": 11
      }
]
export const TrendingSlider=()=>{
    const btnpressprev=()=>{
      let boxel=document.querySelector(`.${styled.product_container}`);
      boxel.scrollLeft-=400
      console.log("hek")
      console.log(boxel.scrollLeft)
    }
    const btnpressnext=()=>{
      let boxel=document.querySelector(`.${styled.product_container}`);
      boxel.scrollLeft+=400
      console.log(boxel.scrollLeft)
  
    }
      return(
          <Box className={styled.carousel} py="60px" >
              
              <Box className={styled.product_container} id="productsss" >
              <Button left={0} top="40%" position="sticky" onClick={btnpressprev} zIndex="2"><Icon as={BsArrowLeftCircle}/></Button>
                  {data.reverse().map(el=><Cards image={el.image} key={Date.now()+el.id} title={el.title} price={el.price} prod={el}></Cards>)}
              <Button right={0} top="40%" position="sticky"onClick={btnpressnext} zIndex="2"><Icon as={BsArrowRightCircle}/></Button>   
              </Box>
          </Box>
      )
  }
  
  const Cards=({image,
    title,
    price,
    prod
    })=>{


  return <Card minW={"350px"} bg={"white"} rounded="3xl" className={styled.card}>
    <CardBody >
      <Image
        src={image}
        alt={title}
        borderRadius='lg'
        width={"250px"}
        margin="auto"
      />
      <Stack mt='6' spacing='3'>
        <Heading size='xs' textAlign={"left"}>{title}</Heading>
        <Box display="flex" justifyContent="space-between">
        <Box>
        <Text color="grey">Rent</Text>
        <Text color='black' fontWeight={600} fontSize='sm'>
          ₹{price}
        </Text>
        </Box>

        </Box>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
    </CardFooter>
  </Card>
  }