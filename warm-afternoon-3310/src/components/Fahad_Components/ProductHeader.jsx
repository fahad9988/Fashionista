import React from 'react';
import { Box, Text ,Input,InputGroup,InputLeftElement ,Select} from '@chakra-ui/react';
import {SearchIcon} from "@chakra-ui/icons"
const ProductHeader = ({products}) => {
  return (
    <Box display="flex" mb="17px" >

     <Box display="flex" flex="0.6"  alignItems="center">
      <Text fontSize={20} mr="10px">Men Products</Text>
      <Text fontSize={14}>({products.length} items)</Text>
     </Box>

     <Box flex="0.7" >
      <InputGroup size="sm" w="90%" >
      <InputLeftElement pointerEvents="none"
      children={<SearchIcon color="#999999" />}
      />
      <Input variant="flushed" size="sm" focusBorderColor='red.500'  placeholder="Search within Category" />
      </InputGroup>
     </Box>

     <Box flex="0.8"  display="flex" justifyContent="flex-end" >
     <Select size="sm" placeholder='Sort by:' width="175px" minW="175px"  focusBorderColor="red.500">
  <option value='popularity'>Popularity</option>
  <option value='asc'>Price Low to High</option>
  <option value='desc'>Price High to Low</option>
  <option value='discount'>Discount</option>
</Select>
     </Box>

    </Box>
  )
}

export default ProductHeader