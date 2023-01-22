import React from 'react'
import {Box,Flex,HStack,Input,Text,Image,Button,Center,Divider,Icon} from "@chakra-ui/react"
import Fs from "./Images/Fashionista.jpeg"
import { BiLogIn } from "react-icons/bi";
import { useState ,useEffect} from 'react';
import { AiOutlineShoppingCart} from "react-icons/ai";
import Auth from "../../pages/authentication/Auth";
import { useNavigate } from 'react-router-dom';

let api = "https://snapdeal-json-server.onrender.com/cart"

import { Link } from 'react-router-dom';


const Navbar = () => {
  const [Items,setItems]=useState(0);
  const[data,setData]=useState([])
  const navigate = useNavigate()
  const handleClick = ()=>{
     navigate("/productCart")
  }

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [ ]);
  
  return (

    <Box w="100%" m="auto" color="white" position="sticky" zIndex={30} top={0}>
      <Flex display={["none","none","flex"]} bgColor="rgb(199,0,61)" px="60px" py="5px" justifyContent="space-between" fontSize={["8px","12px"]}>
        <Text>Brand Waali Quality, Bazaar Waali Deal!</Text>
        <Flex gap={"20px"}>
          <Text>Impact@Snapdeal</Text>
          <Text>Gift Cards</Text>
          <Text>Help Center</Text>
          <Text>Sell on Snapdeal</Text>
          <Text>Download App</Text>
        </Flex>
      </Flex>
      <Flex px={{md:"0px",lg:"40px"}} h="65px" bgColor={"rgb(228,0,70)"} alignItems="center" justifyContent={"space-between"}>
          <Image src={Fs} height="50px"></Image>
          <Flex w="50%">  
          <Input bgColor={"white "} color="black" w="100%" h="10" fontWeight="300" fontSize={"13px"} borderRightRadius="0px" placeholder='Search products and brands'/>
          <Button bgColor="black" h={"10"} fontSize={"13px"} borderLeftRadius="0px">Search</Button>
          </Flex>
          <Flex alignItems={"center"}>

          <Center height='65px'>
            <Divider borderColor="darkred" orientation='vertical' />
          </Center>
          <Box alignItems="center" cursor="pointer" display="flex" px="20px" onClick={handleClick}>
            <Box display={{lg:"block",base:"none"}}>Cart</Box>
            <Icon   as={AiOutlineShoppingCart} />
            - {data.length}
          </Box>
          <Center height='65px'>
            <Divider borderColor="darkred" orientation='vertical' />
          </Center>
          <Box alignItems="center"  display="flex" px="20px">
            <Auth />
          </Box>
          <Center height='65px'>
            <Divider borderColor="darkred" orientation='vertical' />
          </Center>
          </Flex>
      </Flex>
      <Flex  bgColor={"rgb(228,0,70)"} px="60px"  py="0px" borderTop="1px solid darkred" justifyContent="center"  gap="10%" fontSize={["8px","12px"]}>      
         <Link to="/menproducts" ><Text fontSize={["xs","sm","md"]} py="2px" px="5px" cursor={"pointer"} _hover={{color:"black"}}>MEN</Text></Link> 
          <Link to="/womenproducts" > <Text fontSize={["xs","sm","md"]} py="2px" px="5px" cursor={"pointer"} _hover={{color:"black"}}>WOMEN</Text></Link>
          <Link to="/kidproducts" ><Text fontSize={["xs","sm","md"]} py="2px" px="5px" cursor={"pointer"} _hover={{color:"black"}}>KIDS</Text></Link>
      </Flex>
    </Box>
    
  )
}

export default Navbar