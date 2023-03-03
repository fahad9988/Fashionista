import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link} from "react-router-dom";



const AdminNavbar = ()=>{
  
    const dispatch = useDispatch()
   return(
    <div style={{ backgroundColor:"rgb(199,0,61)", color:"white"}}>
    <Box style={{display:'flex', justifyContent:"space-around", marginTop:"-10px", marginBottom:"-10px",alignItems:"center", fontWeight:"bold" , margin:"auto" ,paddingTop:'5px',padding:"10px"}}>
    

        <Box></Box>
        <Box ><Link to={"/adminadd"}><Heading size={"md"}>Add-Product</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/adminproducts"}><Heading size={"md"}>Kids-Products</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/menproducts"}><Heading size={"md"}>Men-Products</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/womenproducts"}><Heading size={"md"}>Women-Products</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/adminall"}><Heading size={"md"}>All Admin</Heading></Link></Box> &nbsp;
        
    </Box>
    </div>
   )
}

export default AdminNavbar