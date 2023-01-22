import React from 'react';
import { Box, Text ,Input,InputGroup,InputLeftElement ,Select} from '@chakra-ui/react';
import {SearchIcon} from "@chakra-ui/icons"

const ProductHeader2 = ({products,search,setSearch,sort,setSort,popularity,setPopularity}) => {
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <Box display="flex" mb="17px"  >

     <Box display={{sm:"flex",base:"none"}} flex={{sm:"0.8",md:"0.8",lg:"0.6"}}  alignItems="center"  >
      <Text fontSize={{sm:12,md:16,lg:17.5}} mr={{sm:"5px",md:"7px",lg:"10px"}}>Women</Text>
      <Text fontSize={{sm:8,md:11,lg:14}}>({products.data.length} items)</Text>
     </Box>

     <Box flex={{base:"0.9",sm:"0.8",md:"0.7",lg:"0.7"}}  >
      <InputGroup size="sm" w={{base:"100%",md:"100%",lg:"90%"}} >
      <InputLeftElement pointerEvents="none"
      children={<SearchIcon color="#999999" boxSize={{base:"11px",md:"13px",lg:"16px"}} />}
      />
      <Input variant="flushed" size="sm" _placeholder={{fontSize:{base:"10px",md:"12px",lg:"14px"}}} focusBorderColor='red.500'  placeholder="Search within Category"  type="text" value={search} onChange={handleSearch} />
      </InputGroup>
     </Box>

     <Box flex={{base:"0.7",md:"0.8",lg:"0.8"}}  display="flex" justifyContent="flex-end" alignItems="center" >
     <Select  size={{base:"xs",md:"sm",lg:"sm"}} placeholder='Sort by:' width={{base:"100px",sm:"115px",md:"150px",lg:"175px"}}   focusBorderColor="red.500" value={sort} onChange={(e)=>{
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

export default ProductHeader2