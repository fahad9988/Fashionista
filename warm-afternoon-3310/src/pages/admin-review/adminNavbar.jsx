import { Box, Button, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Routes,Route, Link} from "react-router-dom";
import Fs from "../../components/Akshay/Images/Fashionista.jpeg"


const AdminNavbar = ()=>{
  
    const dispatch = useDispatch()
   return(
    <div style={{ backgroundColor:"rgb(199,0,61)", color:"white"}}>
    <Box style={{display:'flex', justifyContent:"space-around", marginTop:"-10px", marginBottom:"-10px",alignItems:"center", fontWeight:"bold" , margin:"auto" ,paddingTop:'5px',padding:"10px"}}>
    <Box>
            {/* <Link to={"/"} onClick={()=>setAdminBar(false)}>
              <Image
                padding={"15px"}
                width={"200px"}
                marginLeft={"20px"}
                marginTop={"-10px"}
                marginBottom={"-10px"}
                src={Fs}
                alt="Fashionista"
              />
            </Link> */}
          </Box>

        
        <Box ><Link to={"/adminadd"}><Heading size={"md"}>Add-Product</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/adminproducts"}><Heading size={"md"}>All-Products</Heading></Link></Box> &nbsp;
        <Box ><Link to={"/adminall"}><Heading size={"md"}>All Admin</Heading></Link></Box> &nbsp;
        {/* {
            isAuth||token? <Button onClick={()=>{dispatch(logoutAction)}} color={"black"}>Logout</Button>:""

        } */}
    </Box>
    </div>
   )
}

export default AdminNavbar