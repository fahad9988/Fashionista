import { Box, Button, Heading, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'


import {useDispatch} from "react-redux"
import { ADD_data_item } from '../../redux/admin/admin.action'
import AdminNavbar from './adminNavbar'

function AdminSideAddProducts() {

  const [val, setVal] = useState({})

  const dispatch = useDispatch()
  let handleChange = (e)=>{
    const {name,value} = e.target

    setVal({...val,[name]:value})
  }
   console.log(val.category)
  
  const handleSubmit =()=>{
    dispatch(ADD_data_item(val))
    document.getElementById("title").value = ""
    document.getElementById("images").value = ""
    
    document.getElementById("category").value = ""
    document.getElementById("strike_price").value = ""
    document.getElementById("price2").value = ""
    document.getElementById("price").value = ""
    document.getElementById("rating").value = ""
   
    alert("Product is added")
  }



  return (
    <div>
      <AdminNavbar/>
      <Box  p={["20px","0px","2px","10px"]}  background={"#B2DAF1"}  >
      <Heading  marginBottom={"10px"} textAlign={"center"} fontSize={"20px"}>Add Product</Heading>

      </Box>
    <Box backgroundColor={"tomato"} width={"50%"} margin={"auto"} paddingBottom={"30px"} borderRadius="5%" paddingTop={"20px"} marginTop="30px"   >
      <Box width={"80%"} margin={"auto"} backgroundColor={"white"} padding={"10px"} borderRadius="5%" marginTop={"30px"}>
        <Input type="text"  onChange={(e)=>{handleChange(e)}} margin="7px" name="title" id="title" placeholder="Enter Product Title" required /> <br />
        <Input type="url" onChange={(e)=>{handleChange(e)}} margin="7px" name="images" id="images" placeholder="Image" required/> <br />
       
        <Select name="category"  onChange={(e)=>{handleChange(e)}} margin="7px" id="category" placeholder='Select Category' >
          <option value='mens'>Mens </option>
          <option value='womens'>Womens</option>
          <option value='child'>Child</option>
          
        </Select>
        <Input type="text" onChange={(e)=>{handleChange(e)}} margin="7px" name="strike_price" id="strike_price" placeholder="Strike Price" required/> <br />
        <Input type="text" onChange={(e)=>{handleChange(e)}} margin="7px" name="price" id="price" placeholder="Launch Price" required/> <br />
        
        <Input type="text" onChange={(e)=>{handleChange(e)}} margin="7px" name="rating" id="rating" placeholder="Rating" required/> <br />
        
        <Button  backgroundColor={"skyblue"}  width={"100%"} onClick={handleSubmit}>ADD</Button>

      </Box>
    </Box>
    </div>
  )
}

export  {AdminSideAddProducts}