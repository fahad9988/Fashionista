import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Box,Flex,Image,Text, HStack, Tag, Select, Button,useToast, Heading} from "@chakra-ui/react";
import {useEffect} from "react";
import { getWishlistItems } from '../../redux/wishlist/wishlist.action';
import WishlistHeader from '../../components/Fahad_Components/WishlistHeader';
import { StarIcon } from '@chakra-ui/icons';
import { addCart, getCartItems } from '../../redux/cart/cart.action';
import { removeWishlist } from '../../redux/wishlist/wishlist.action';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const [size,setSize]=React.useState("");
  const [sort,setSort]=React.useState("");
  const wishlistItems=useSelector((store)=>{
return store.wishlist.wishlist;
  });
  const cartItems=useSelector((store)=>{
    return store.cart.cart;
  });
  const dispatch=useDispatch();
  const toast=useToast();

  useEffect(()=>{
   dispatch(getWishlistItems(sort));
   dispatch(getCartItems());
  },[sort])

console.log(wishlistItems);
const navigate=useNavigate();

const handleClick=(item)=>{
  if(size==""){
    toast({
      title: 'Select Size.',
      description: "Please select one of the sizes.",
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:"top"
    })
  }else{
    dispatch(addCart({...item,size:size}));
    toast({
      title: 'Add to Cart.',
      description: "Item added to Cart Successfully.",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:"top"
    })
    
  }
}

let exist=false;
const goToCart=()=>{
  navigate("/productCart")
}

const removeItem=(id)=>{
  dispatch(removeWishlist(id));
}

  return (
    <Box>
      <Box w={{lg:"65%",xl:"60%",md:"75%",base:"100%"}} m="auto" mt="30px"  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <WishlistHeader wishlistItems={wishlistItems} sort={sort} setSort={setSort}  />
        <hr/>
        <Box  p="20px">
        {wishlistItems.length==0&& <Box textAlign="center">
            <Heading>There are no Items added in your Wishlist.</Heading>
            <Button mt="15px" size="lg" color="white"   bgColor="#E40046" _hover={{bgColor:"white",color:"#E40046",border:"2px solid #E40046"}} onClick={()=>{
              navigate("/")
            }} >START SHOPPING NOW</Button>
            </Box>}
        {wishlistItems.map((item)=>{
          cartItems.forEach((e)=>{
            if(e.id==item.id){
           exist=true;
            }
          })
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
                <b fontSize="13px">Rs. {item.price}</b>
                 
                  <Tag size="xs" p="3px" fontSize="12px" colorScheme="gray">{item.discount}</Tag>
            </HStack>
          {!exist?<Select value={size} onChange={(e)=>{setSize(e.target.value)}} size="xs" w="130px" placeholder='Select Size' focusBorderColor="red.500" >
        <option value='XS'>XS</option>
        <option value='S'>S</option>
        <option value='M'>M</option>
        <option value='L'>L</option>
        <option value='XL'>XL</option>
        <option value='XXL'>XXL</option>
            </Select>:null}  
            <Flex p={{lg:"15px 0px",base:"10px 0px"}}  direction={{md:"row",base:"column"}} alignItems="flex-start" >
      {exist?<Button mb={{md:"0px",base:"10px"}} mr={{md:"20px"}}  size={{md:"sm",base:"xs"}} bgColor="#333333" color="white" borderRadius="3px" _hover={{bgColor:"white",color:"#333333",border:"2px solid #333333"}} onClick={()=>{goToCart()}} >GO TO CART</Button>
      :
      <Button mb={{md:"0px",base:"10px"}} mr={{md:"20px"}}  size={{md:"sm",base:"xs"}} bgColor="#333333" color="white" borderRadius="3px" _hover={{bgColor:"white",color:"#333333",border:"2px solid #333333"}} onClick={()=>{handleClick(item)}} >ADD TO CART</Button>
      }
      <Button  size={{md:"sm",base:"xs"}} bgColor="white" color="#333333" border="1px solid #333333" borderRadius="3px" _hover={{border:"2px solid #333333"}} onClick={()=>{removeItem(item.id)}} >REMOVE FROM SHORTLIST</Button>
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