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
        <Box ><Link to={"/adminall"}><Heading size={["xs","sm","md"]}>Admin</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/adminproducts"}><Heading size={["xs","sm","md"]}>Kids</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/adminmenproducts"}><Heading size={["xs","sm","md"]}>Men</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/adminwomenproducts"}><Heading size={["xs","sm","md"]}>Women</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/adminadd"}><Heading size={["xs","sm","md"]}>Add-Product</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/graphproduct"}><Heading size={["xs","sm","md"]}>Price-Graph</Heading></Link></Box> &nbsp;
       
        
    </Box>
    </div>
   )
}

export default AdminNavbar