import React from 'react';
import {Box,Text,Grid,GridItem,Image,Skeleton,Tag,HStack, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
useDisclosure} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import { getKidProducts } from '../../redux/product/product.action';

import SideBar3 from "../../components/Fahad_Components/SideBar3"
import ProductHeader3 from "../../components/Fahad_Components/ProductHeader3"

import {BsFillFilterSquareFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import GridLayout from "../../components/Fahad_Components/GridLayout"

import "./KidProducts.css";

const KidProducts = () => {
  const [sweatshirt,setSweatshirt]=React.useState("");
  const [tshirt,setTshirt]=React.useState("");
  const [trackpants,setTrackpants]=React.useState("");
  const [blazer,setBlazer]=React.useState("");


  const [search,setSearch]=React.useState("");

  const [sort,setSort]=React.useState("");
  const [popularity,setPopularity]=React.useState("");

  const [hellcat,setHellcat]=React.useState("");
  const [hopscotch,setHopscotch]=React.useState("");
  const [plumtree,setPlumtree]=React.useState("");
  const [max,setMax]=React.useState("");

  const [slider,setSlider]=React.useState(0);
  const low=Number((slider[0]*1499)/100);
  const high=Number((slider[1]*1499)/100);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  if(sort=="pop-desc"){
    setSort("");
    setPopularity("desc")
  }

  const dispatch=useDispatch();
  const products=useSelector((store)=>{return store.productManager})
  console.log(products.data);

  useEffect(()=>{
  dispatch(getKidProducts(sweatshirt,tshirt,trackpants,blazer,search,sort,popularity,hellcat,hopscotch,plumtree,max,low,high))
  },[sweatshirt,tshirt,trackpants,blazer,search,sort,popularity,hellcat,hopscotch,plumtree,max,low,high]);

 
  
  return (
    <>
    <Box display={{base:"block",lg:"flex"}} position="relative" p="10px">

      <Box flex={0.3} display={{base:"none",lg:"block"}}  >
      <SideBar3 
      sweatshirt={sweatshirt} setSweatshirt={setSweatshirt} tshirt={tshirt} setTshirt={setTshirt} trackpants={trackpants} setTrackpants={setTrackpants} blazer={blazer} setBlazer={setBlazer}  hellcat={hellcat} setHellcat={setHellcat} hopscotch={hopscotch} setHopscotch={setHopscotch} plumtree={plumtree} setPlumtree={setPlumtree} max={max} setMax={setMax} slider={slider} setSlider={setSlider} low={low} high={high}
      />
      </Box>

      <Box pl="12px" display={{base:"flex",lg:"none"}} alignItems="center" >
       <BsFillFilterSquareFill onClick={onOpen} fontSize={20} color="#E40046" />
       <Text onClick={onOpen} cursor="pointer" fontSize="20px" fontWeight="bold"  ml="7px" >Filter</Text>
       <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Filter</DrawerHeader>
          <DrawerBody>
            <SideBar3  sweatshirt={sweatshirt} setSweatshirt={setSweatshirt} tshirt={tshirt} setTshirt={setTshirt} trackpants={trackpants} setTrackpants={setTrackpants} blazer={blazer} setBlazer={setBlazer}  hellcat={hellcat} setHellcat={setHellcat} hopscotch={hopscotch} setHopscotch={setHopscotch} plumtree={plumtree} setPlumtree={setPlumtree} max={max} setMax={setMax} slider={slider} setSlider={setSlider} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>

      <Box  flex={1} p="15px 15px"  >
        <ProductHeader3 products={products} search={search} setSearch={setSearch} sort={sort} setSort={setSort} popularity={popularity} setPopularity={setPopularity}   />

        <hr/>

        <GridLayout products={products}/>
      </Box>
   
    </Box>
    </>
  )
}

export default KidProducts