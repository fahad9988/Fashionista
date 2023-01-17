import React from 'react';
import {Box,Text,Grid,GridItem,Image,Skeleton,Tag,HStack} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {useSelector,useDispatch} from "react-redux";
import {useState,useEffect} from "react";
import { getMenProducts } from '../../redux/product/product.action';
import SideBar from '../../components/Fahad_Components/SideBar';
import ProductHeader from '../../components/Fahad_Components/ProductHeader';

import "./MenProduct.css"


const MenProducts = () => {
  const dispatch=useDispatch();
  const products=useSelector((store)=>{return store.productManager})
console.log(products.data)
  useEffect(()=>{
dispatch(getMenProducts())
  },[]);
 
  
  return (
    <>
    <Box display="flex"  >

      <Box flex={0.3} border="1px solid red">
      <SideBar/>
      </Box>

      <Box  flex={1} p="15px 15px">
        <ProductHeader products={products} />
        <hr/>
        {products.loading&&<Box display="grid" gridTemplateColumns="repeat(4,1fr)" gap="20px" >
         {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((box)=>{
          return <Skeleton h="250px" >hi</Skeleton>
         })}
         </Box>}

         <Grid  
        
            templateColumns={{
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl:"repeat(4,1fr)"
            }}
            gap="20px"
            mt="15px"
            >
          {
            products.data?.map((item)=>{
              return <GridItem p="15px 7px"  key={item.id} position="relative" className='product-card'>
            
                 <Image
                  m="auto"
                  src={item.images[0]}
                  width="200px"
                  height="230px"
                  alt="image"
                />
                <Text color="#748A9C" fontSize="14px" mt={2}>{item.subtitle}</Text>
                <Text color="#748A9C" fontSize="14px" >{item.title}</Text>
                <HStack display="flex" h="30px"  alignItems="center" >
                <Text fontSize="14px" color="#D6D0DB" textDecoration="line-through">
                    Rs. {item.strike_price}
                  </Text>
                <b fontSize="14px">Rs. {item.discounted_price}</b>
                 
                  <Tag colorScheme="gray">{item.discount}</Tag>
                </HStack>
                
                <Box display="flex"  alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        boxSize={3}
                        key={i}
                        color={
                          i < Math.floor(item.rating) ? "yellow.400" : "gray.300"
                        }
                      />
                    ))}
                  <Box as="span"  ml="2" color="#D6D0DB" fontSize="sm">
                    ({item.rating})
                  </Box>
                </Box>

                
                
               

              </GridItem>
            })
          }
         </Grid>
         
      </Box>
   
    </Box>
    </>
  )
}

export default MenProducts