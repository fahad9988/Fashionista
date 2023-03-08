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
import { getWomenProducts } from '../../redux/product/product.action';

import SideBar2 from "../../components/Fahad_Components/SideBar2"
import ProductHeader2 from "../../components/Fahad_Components/ProductHeader2"

import {BsFillFilterSquareFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

import "./WomenProducts.css";
import GridLayout from '../../components/Fahad_Components/GridLayout';

const WomenProducts = () => {
  const [kurta,setKurta]=React.useState("");
  const [jeans,setJeans]=React.useState("");
  const [saree,setSaree]=React.useState("");
  const [trousers,setTrousers]=React.useState("");


  const [search,setSearch]=React.useState("");

  const [sort,setSort]=React.useState("");
  const [popularity,setPopularity]=React.useState("");

  const [kalini,setKalini]=React.useState("");
  const [anouk,setAnouk]=React.useState("");
  const [khushalk,setKhushalk]=React.useState("");
  const [fashor,setFashor]=React.useState("");

  const [slider,setSlider]=React.useState(0);
  const low=Number((slider[0]*7890)/100);
  const high=Number((slider[1]*7890)/100);

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
  dispatch(getWomenProducts(kurta,jeans,saree,trousers,search,sort,popularity,kalini,anouk,khushalk,fashor,low,high))
  },[kurta,jeans,saree,trousers,search,sort,popularity,kalini,anouk,khushalk,fashor,low,high]);

 
  
  return (
    <>
    <Box display={{base:"block",lg:"flex"}} position="relative" p="10px">

      <Box flex={0.3} display={{base:"none",lg:"block"}} >
      <SideBar2 
      kurta={kurta} setKurta={setKurta} jeans={jeans} setJeans={setJeans} saree={saree} setSaree={setSaree} trousers={trousers} setTrousers={setTrousers}  kalini={kalini} setKalini={setKalini} anouk={anouk} setAnouk={setAnouk} khushalk={khushalk} setKhushalk={setKhushalk} fashor={fashor} setFashor={setFashor} slider={slider} setSlider={setSlider}
      low={low} high={high}
      />
      </Box>

      <Box  pl="12px" display={{base:"flex",lg:"none"}} alignItems="center" >
       <BsFillFilterSquareFill onClick={onOpen} fontSize={20} color="#E40046" />
       <Text onClick={onOpen} cursor="pointer" fontSize="20px" fontWeight="bold"  ml="7px" >Filter</Text>
       <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Filter</DrawerHeader>
          <DrawerBody>
            <SideBar2  kurta={kurta} setKurta={setKurta} jeans={jeans} setJeans={setJeans} saree={saree} setSaree={setSaree} trousers={trousers} setTrousers={setTrousers}  kalini={kalini} setKalini={setKalini} anouk={anouk} setAnouk={setAnouk} khushalk={khushalk} setKhushalk={setKhushalk} fashor={fashor} setFashor={setFashor} slider={slider} setSlider={setSlider} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>

      <Box  flex={1} p="15px 15px"  >
        <ProductHeader2 products={products} search={search} setSearch={setSearch} sort={sort} setSort={setSort} popularity={popularity} setPopularity={setPopularity}   />

        <hr/>

      <GridLayout products={products}/>
      </Box>
   
    </Box>
    </>
  )
}

export default WomenProducts