import React from 'react';
import { Box, Text ,Input,InputGroup,InputLeftElement ,Select} from '@chakra-ui/react';
import {SearchIcon} from "@chakra-ui/icons"

const ProductHeader3 = ({products,search,setSearch,sort,setSort,popularity,setPopularity}) => {
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <Box display="flex" mb="17px"  >

     <Box display="flex" flex={{sm:"0.8",md:"0.8",lg:"0.6"}}  alignItems="center"  >
      <Text fontSize={{sm:14,md:18,lg:20}} mr={{sm:"5px",md:"7px",lg:"10px"}}>Kid Products</Text>
      <Text fontSize={{sm:9,md:12,lg:14}}>({products.data.length} items)</Text>
     </Box>

     <Box flex={{sm:"0.8",md:"0.7",lg:"0.7"}}  >
      <InputGroup size="sm" w={{sm:"100%",md:"100%",lg:"90%"}} >
      <InputLeftElement pointerEvents="none"
      children={<SearchIcon color="#999999" boxSize={{sm:"11px",md:"13px",lg:"16px"}} />}
      />
      <Input variant="flushed" size="sm" _placeholder={{fontSize:{sm:"10px",md:"12px",lg:"14px"}}} focusBorderColor='red.500'  placeholder="Search within Category"  type="text" value={search} onChange={handleSearch} />
      </InputGroup>
     </Box>

     <Box flex={{sm:"0.7",md:"0.8",lg:"0.8"}}  display="flex" justifyContent="flex-end" alignItems="center" >
     <Select  size={{sm:"xs",md:"sm",lg:"sm"}} placeholder='Sort by:' width={{sm:"115px",md:"150px",lg:"175px"}}   focusBorderColor="red.500" value={sort} onChange={(e)=>{
      if(popularity=="desc"){
        setPopularity("")
      }
      setSort(e.target.value)
     }} >
        <option value='pop-desc'>Popularity</option>
        <option value='asc'>Price Low to High</option>
        <option value='desc'>Price High to Low</option>
     </Select>
     </Box>

    </Box>
  )
}

export default ProductHeader3