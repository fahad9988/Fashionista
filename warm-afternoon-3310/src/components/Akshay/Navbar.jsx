import React from 'react'
import {Box,Flex,HStack,Input,Text,Image,Button,Center,Divider,Icon} from "@chakra-ui/react"
import Fs from "./Images/Fashionista.png"
import { BiLogIn } from "react-icons/bi";
import { AiOutlineShoppingCart} from "react-icons/ai";
const Navbar = () => {
  return (
    <Box w="100%" m="auto" color="white">
      <Flex  bgColor="rgb(199,0,61)" px="60px" py="5px" justifyContent="space-between" fontSize={["8px","12px"]}>
        <Text>Brand Waali Quality, Bazaar Waali Deal!</Text>
        <Flex gap={"20px"}>
          <Text>Impact@Snapdeal</Text>
          <Text>Gift Cards</Text>
          <Text>Help Center</Text>
          <Text>Sell on Snapdeal</Text>
          <Text>Download App</Text>
        </Flex>
      </Flex>
      <Flex px="50px" h="65px" bgColor={"rgb(228,0,70)"} alignItems="center" justifyContent={"space-between"}>
          <Image src={Fs} height="50px"></Image>
          <Flex w="50%">  
          <Input bgColor={"white "} color="black" w="100%" h="10" fontWeight="300" fontSize={"13px"} borderRightRadius="0px" placeholder='Search products and brands'/>
          <Button bgColor="black" h={"10"} fontSize={"13px"} borderLeftRadius="0px">Search</Button>
          </Flex>
          <Flex alignItems={"center"}>

          <Center height='65px'>
            <Divider borderColor="darkred" orientation='vertical' />
          </Center>
          <Box alignItems="center"  display="flex" px="20px">
            Cart
            <Icon   as={AiOutlineShoppingCart} />
          </Box>
          <Center height='65px'>
            <Divider borderColor="darkred" orientation='vertical' />
          </Center>
          <Box alignItems="center"  display="flex" px="20px" >
            Sign In
            <Icon as={BiLogIn} />
          </Box>
          <Center height='65px'>
            <Divider borderColor="darkred" orientation='vertical' />
          </Center>
          </Flex>
      </Flex>
      <Flex  bgColor={"rgb(228,0,70)"} px="60px" py="0px" borderTop="1px solid darkred" justifyContent="center"  gap="20%" fontSize={["8px","12px"]}>      
          <Text>Men</Text>
          <Text>Women</Text>
          <Text>Kids</Text>
      </Flex>
    </Box>
    
  )
}

export default Navbar