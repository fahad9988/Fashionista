import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';


const SideBarHeader3 = () => {
  return (
    <Box  display="flex" justifyContent="center" h="33px" alignItems="center" >
      <Breadcrumb color="red.600" fontSize={15} spacing={1} separator={<ChevronRightIcon color='red.600' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='/kidproducts'>Kids</BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>

    </Box>
  )
}

export default SideBarHeader3