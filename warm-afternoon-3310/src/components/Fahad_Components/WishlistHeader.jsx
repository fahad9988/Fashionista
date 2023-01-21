import React from 'react';
import {Box,Text,Select} from "@chakra-ui/react"

const WishlistHeader = ({wishlistItems,sort,setSort}) => {
  return (
    <Box display="flex"  p={{base:"10px 20px",md:"10px 20px"}}  >
     <Box flex="1"  display="flex" alignItems="center" >
      <Text color="black" fontWeight={600} fontSize={{lg:"18px", md:"16px",sm:"15px",base:"14px"}} >SHORTLIST ({wishlistItems.length} Items)</Text>
     </Box>
    {wishlistItems.length==0?null
    :
    <Box flex="1" display="flex" justifyContent="flex-end" alignItems="center"  >
     <Select value={sort} onChange={(e)=>{
      setSort(e.target.value)
     }}  size={{md:"sm",base:"xs"}} w={{md:"175px",base:"105px"}} placeholder='Sort by:' focusBorderColor="red.500" >
        <option value='asc'>Price (Low to High)</option>
        <option value='desc'>Price (High to Low)</option>
     </Select>
     </Box>} 
    </Box>
  )
}

export default WishlistHeader