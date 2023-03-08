import { StarIcon } from '@chakra-ui/icons';
import { Box, Grid, GridItem, HStack, Image, Skeleton, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const GridLayout = ({products}) => {
  return (
    <>  
    {
     products.loading && <Box display="grid" gridTemplateColumns={{
       base:"repeat(1,1fr)",
       sm: "repeat(2,1fr)",
       md: "repeat(3,1fr)",
       lg: "repeat(3,1fr)",
       xl:"repeat(4,1fr)"
     }} gap="20px" >
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((box)=>{
       return <Skeleton h="250px" key={box} >hi</Skeleton>
      })}
      </Box>
     }

     {
      products.data.length === 0 && (
         <Box>
           <Image
             width="600px"
             h="500px"
             m="auto"
             src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
           />
         </Box>
       )
     }

      <Grid  
     
         templateColumns={{
           base: "repeat(1,1fr)",
           sm: "repeat(2,1fr)",
           md: "repeat(3,1fr)",
           lg: "repeat(3,1fr)",
           xl:"repeat(4,1fr)"
         }}
         rowGap="20px"
         
         mt="15px"
         >
       {
         products.data?.map((item)=>{
           return <Link to={`/products/${item.id}`} >
           <GridItem m="auto" p="15px 7px" minW="210px" maxWidth="260px" key={item.id} position="relative" className='product-card'>
         
              <Image
               m="auto"
               src={item.images}
               width="200px"
               height="230px"
               alt="image"
               fallbackSrc='https://t4.ftcdn.net/jpg/02/49/21/53/360_F_249215319_qMcKnElEzzo2xSVZI584GfVtvJTpSAL8.jpg'
             />
             <Text color="#748A9C" fontSize="14px" mt={2}>{item.subtitle}</Text>
             <Text color="#748A9C" fontSize="14px" >{item.title}</Text>
             <HStack display="flex" h="30px"  alignItems="center" flexWrap="wrap">
             <Text fontSize="13px" color="#D6D0DB" textDecoration="line-through">
                 Rs. {item.strike_price}
               </Text>
             <b fontSize="13px">Rs. {item.price}</b>
              
               <Tag size="xs" fontSize="12px" colorScheme="gray">{item.discount}</Tag>
             </HStack>
             
             <Box display="flex"  alignItems="center" >
               {Array(5)
                 .fill("")
                 .map((e, i) => (
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
           </Link>
         })
       }
      </Grid>
      </>
  )
}

export default GridLayout