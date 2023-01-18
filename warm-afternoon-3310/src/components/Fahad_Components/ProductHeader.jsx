import React from 'react';
import { Box, Text ,Input,InputGroup,InputLeftElement ,Select} from '@chakra-ui/react';
import {SearchIcon} from "@chakra-ui/icons"
const ProductHeader = ({products,search,setSearch,sort,setSort,popularity,setPopularity}) => {

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <Box display="flex" mb="17px" border="1px solid black" >

     <Box display="flex" flex="0.6"  alignItems="center">
      <Text fontSize={20} mr="10px">Men Products</Text>
      <Text fontSize={14}>({products.data.length} items)</Text>
     </Box>

     <Box flex="0.7" >
      <InputGroup size="sm" w="90%" >
      <InputLeftElement pointerEvents="none"
      children={<SearchIcon color="#999999" />}
      />
      <Input variant="flushed" size="sm" focusBorderColor='red.500'  placeholder="Search within Category" type="text" value={search} onChange={handleSearch} />
      </InputGroup>
     </Box>

     <Box flex="0.8"  display="flex" justifyContent="flex-end" >
     <Select size="sm" placeholder='Sort by:' width="175px" minW="175px"  focusBorderColor="red.500" value={sort} onChange={(e)=>{
      if(popularity=="desc"){
        setPopularity("")
      }
      setSort(e.target.value)
     }}  >
  <option value='pop-desc'>Popularity</option>
  <option value='asc'>Price Low to High</option>
  <option value='desc'>Price High to Low</option>
</Select>
     </Box>

    </Box>
  )
}

export default ProductHeader