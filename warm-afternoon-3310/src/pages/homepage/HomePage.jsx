import { Box,Text,Avatar ,Image, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import ImageSlider from '../../components/Akshay/Carousel_1'
import {Search2Icon} from "@chakra-ui/icons"
import ln from "../../components/Akshay/Images/ln.png"
import { TrendingSlider } from '../../components/Akshay/Carousel_2'

const HomePage = () => {
    const [state, setstate] = useState(null);
    const [value,setvalue]=useState("")
  return (
    <Box display={"flex"} px="3%" py="10px" gap="1%" lineHeight={"25px"} color="gray" bgColor={"rgb(247,247,247)"}>
      <Box >
          <Box bgColor={"white"} p="10px" px="15px" fontSize="xs">
              <Text>TOP CATEGORIES</Text>
              <Text cursor={"pointer"}>  
                <Avatar name='Dan Abrahmov' size="xs" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCj6ELfAzyzeBFLx5WzsB5OgaSff7BdrHcfg&usqp=CAU' mb="10px"/>
                {"  "}Men's Fashion
                </Text>
              <Text cursor={"pointer"}>  
                <Avatar name='Dan Abrahmov' size="xs" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIrfq4pU9ilNzV1EnB7NTzPspCXsjotxEdQ&usqp=CAUv' mb="10px"/>
                {"  "}
                Women's Fashion
                </Text>
              <Text cursor={"pointer"}>  <Avatar name='Dan Abrahmov' size="xs" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXhdWp7zMsZDBMC1-z8DAMe-SIpzT9TORSw&usqp=CAU' mb="10px"/>{" "}
              Home & Kitchen</Text>
              <Text cursor={"pointer"}>  <Avatar name='Dan Abrahmov' size="xs" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNVoPJSv4_i6jt85LDULEXvujzP7Xlv0RJg&usqp=CAU' mb="10px"/>{"  "}
              Toys, Kids' Fashion</Text>
              <Text cursor={"pointer"}>  <Avatar name='Dan Abrahmov' size="xs" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPb1gavbW7DZywWyODsiFsVrNpr5Zk6F_gA&usqp=CAU' mb="10px"/>{"  "}
              Beauty Health & Daily</Text>
              <br />
              <Text>MORE CATEGORIES</Text>
              <Text ml="6px">{"  Automotives"}</Text>
              <Text ml="6px">{"  Mobile & Accessories"}</Text>
              <Text ml="6px">{"  Electronics"}</Text>
              <Text ml="6px">{"  Sports, Fitness & Gaming"}</Text>
              <Text ml="6px">{"  Computers & Gaming"}</Text>
              <Text ml="6px">{"  Books,Media & Music"}</Text>
              <Text ml="6px">{"  Hobbies"}</Text>
              <br />
              <Text> TRENDING SEARCHES</Text>
              <Text cursor={"pointer"}><Search2Icon fontSize="8px"/>  Kitchen Product</Text>
              <Text cursor={"pointer"}><Search2Icon fontSize="8px"/>  Shoes For Men</Text>
              <Text cursor={"pointer"}><Search2Icon fontSize="8px"/>  Kurti Suit</Text>
              <Text cursor={"pointer"}><Search2Icon fontSize="8px"/>  Sandal Man</Text>
              <Text cursor={"pointer"}><Search2Icon fontSize="8px"/>  Sport Shoe Men</Text>
          </Box>
          <Box>

          </Box>
      </Box>
      
      <Box display={"flex"} w="86%" flexDirection={"column"} >
        <Box display={"flex"}gap={"10px"}>
            <ImageSlider ></ImageSlider>    
            <Box bgColor={"white"} w="100%" justifyContent={"center"} gap="8px" p="5px" fontSize={"12px"} textalign="center" display="flex" flexDirection="column"alignItems="center">
              <Image src={ln} width="60%"></Image> 
              <Text>Your Delivery Pincode</Text>   
              <Text textAlign={"center"}>Enter your pincode to check availability and faster delivery options</Text>
              {state?<Text>Pincode:{state}</Text>:<Input size="xs" type="number" width="80%" placeholder='Enter Pincode' value={value} onChange={(e)=>setvalue(e.target.value)}></Input>}
              {state?<Button size={"xs"} onClick={()=>setstate(null)} bgColor="black" color="white" >Change Pincode</Button>:<Button size="xs" bgColor="black" color="white" onClick={()=>setstate(value)}>Submit</Button>}   
            </Box>
        </Box>
        <Box >
        <Box>
            <Text color="blackAlpha.800">
              TRENDING PRODUCTS
            </Text>
            <Box>
              {/* <TrendingSlider/> */}
            </Box>
        </Box>
        </Box>
      </Box>

        
    </Box>
  )
}

export default HomePage