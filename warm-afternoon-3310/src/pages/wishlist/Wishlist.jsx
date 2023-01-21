import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Box,Flex,Image,Heading,Text, HStack, Tag, Select, Button} from "@chakra-ui/react";
import {useState,useEffect} from "react";
import { getWishlistItems } from '../../redux/wishlist/wishlist.action';
import WishlistHeader from '../../components/Fahad_Components/WishlistHeader';
import { StarIcon } from '@chakra-ui/icons';

const Wishlist = () => {
  const wishlistItems=useSelector((store)=>{
return store.wishlist.wishlist;
  });
  const dispatch=useDispatch();

  useEffect(()=>{
   dispatch(getWishlistItems())
  },[])

console.log(wishlistItems);

  return (
    <Box>
      <Box w={{lg:"65%",xl:"60%",md:"75%",base:"100%"}} m="auto" mt="30px"  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <WishlistHeader wishlistItems={wishlistItems} />
        <hr/>
        <Box  p="20px">
        {wishlistItems.map((item)=>{
           return <Flex p="10px"  mb="20px" direction={{sm:"row",base:"column"}}  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" >
           <Box flex="0.3" display="flex" alignItems="center" >
            <Image m="auto" minW="150px" h="200px" objectFit="cover" src={item.images} />
           </Box>
           <Box flex="1"  p="15px">
            <Text>{item.subtitle}</Text>
            
            <Box display="flex"   alignItems="center" p="5px 0px" >
                  {Array(5)
                    .fill("")
                    .map((e, i) => (
                      <StarIcon
                        mr="2px"
                        boxSize={3}
                        key={i}
                        color={
                          i < Math.floor(item.rating) ? "yellow.400" : "gray.300"
                        }
                      />
                    ))}
                  <Box as="span"  ml="2" color="#9FAECA" fontSize="sm">
                    ({item.rating})
                  </Box>
            </Box>
            <HStack display="flex" h="30px"  alignItems="center" flexWrap="wrap" >
                <Text fontSize="13px" color="#999999" textDecoration="line-through">
                    Rs. {item.strike_price}
                  </Text>
                <b fontSize="13px">Rs. {item.discounted_price}</b>
                 
                  <Tag size="xs" p="3px" fontSize="12px" colorScheme="gray">{item.discount}</Tag>
            </HStack>
            <Select  size="xs" w="130px" placeholder='Select Size' focusBorderColor="red.500" >
        <option value='XS'>XS</option>
        <option value='S'>S</option>
        <option value='M'>M</option>
        <option value='L'>L</option>
        <option value='XL'>XL</option>
        <option value='XXL'>XXL</option>
            </Select>
            <Flex p={{lg:"15px 0px",base:"10px 0px"}}  direction={{md:"row",base:"column"}} alignItems="flex-start" >
      <Button mb={{md:"0px",base:"10px"}} mr={{md:"20px"}}  size={{md:"sm",base:"xs"}} bgColor="#333333" color="white" borderRadius="3px" _hover={{bgColor:"white",color:"#333333",border:"2px solid #333333"}} >ADD TO CART</Button>
      <Button  size={{md:"sm",base:"xs"}} bgColor="white" color="#333333" border="1px solid #333333" borderRadius="3px" _hover={{border:"2px solid #333333"}} >REMOVE FROM SHORTLIST</Button>
            </Flex>
        </Box>
      </Flex>
    })}
        </Box>
      </Box>
    </Box>
  )
}

export default Wishlist