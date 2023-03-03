import { Box, Heading, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteMensData } from '../../redux/admin/admin.action'
import UpdateMenProduct from './updateProductsMen'


const MenSideMapProducts = ({el}) => {
    const dispatch = useDispatch()
    
   

  return (
    <Tr key={el.id} width={"100%"} boxShadow="1px 1px 1px 1px gray">
                
            <Td><Image width={["100px", "100px", "100px", "100px"]} src={el.images}></Image></Td>
        
        
            <Td><Text  width={"200px"} fontSize={["xl","xl"]}>{el.title}</Text></Td>
        
        
            <Td><Text  width={"50px"} fontSize={["xl","xl"]}>{el.strike_price}</Text></Td>
        
        
            <Td><Text  width={"70px"} fontSize={["xl","xl"]}>{el.price}</Text></Td>
        
        
            <Td><Text  width={"90px"} fontSize={["xl","xl"]}>{el.category}</Text></Td>
        
        
            
            
            <Td cursor={"pointer"}>  <UpdateMenProduct el={el} /></Td>
            <Td><Text backgroundColor={"black"} color={"white"} textAlign={"center"} padding={"5px"} borderRadius={"8%"} fontWeight={"medium"} onClick={()=>{dispatch(deleteMensData(el.id))}} fontSize={["xl","2xl"]} cursor={"pointer"}>Delete</Text></Td>
        
    </Tr>
  )
}

export default MenSideMapProducts