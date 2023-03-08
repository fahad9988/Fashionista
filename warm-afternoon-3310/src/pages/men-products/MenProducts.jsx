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
import { getMenProducts } from '../../redux/product/product.action';
import SideBar from '../../components/Fahad_Components/SideBar';
import ProductHeader from '../../components/Fahad_Components/ProductHeader';
import {BsFillFilterSquareFill} from "react-icons/bs";

import "./MenProducts.css";
import { Link } from 'react-router-dom';
import GridLayout from '../../components/Fahad_Components/GridLayout';

const MenProducts = () => {

  const [joggers,setJoggers]=React.useState("");
  const [jeans,setJeans]=React.useState("");
  const [sweatshirt,setSweatshirt]=React.useState("");
  const [trousers,setTrousers]=React.useState("");
  const [chinos,setChinos]=React.useState("");
  const [casualshirt,setCasualShirt]=React.useState("");

  const [search,setSearch]=React.useState("");

  const [sort,setSort]=React.useState("");
  const [popularity,setPopularity]=React.useState("");

  const [roadster,setRoadster]=React.useState("");
  const [highlander,setHighlander]=React.useState("");
  const [locomotive,setLocomotive]=React.useState("");
  const [ivoc,setIvoc]=React.useState("");

  const [slider,setSlider]=React.useState(0);
  const low=Number((slider[0]*3199)/100);
  const high=Number((slider[1]*3199)/100);

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
  dispatch(getMenProducts(joggers,jeans,sweatshirt,trousers,chinos,casualshirt,search,sort,popularity,roadster,highlander,locomotive,ivoc,low,high))
  },[joggers,jeans,sweatshirt,trousers,chinos,casualshirt,search,sort,popularity,roadster,highlander,locomotive,ivoc,low,high]);

 
  
  return (
    <>
    <Box display={{base:"block",lg:"flex"}}  p="10px" position="relative">

      <Box  flex={0.3} display={{base:"none",lg:"block"}}  >
      <SideBar 
      joggers={joggers} setJoggers={setJoggers} jeans={jeans} setJeans={setJeans} sweatshirt={sweatshirt} setSweatshirt={setSweatshirt} trousers={trousers} setTrousers={setTrousers} chinos={chinos} setChinos={setChinos} casualshirt={casualshirt} setCasualShirt={setCasualShirt} roadster={roadster} setRoadster={setRoadster} highlander={highlander} setHighlander={setHighlander} locomotive={locomotive} setLocomotive={setLocomotive} ivoc={ivoc} setIvoc={setIvoc} slider={slider} setSlider={setSlider} low={low} high={high}
      />
      </Box>

      <Box pl="12px" display={{base:"flex",lg:"none"}} alignItems="center" >
       <BsFillFilterSquareFill onClick={onOpen} fontSize={20} color="#E40046" />
       <Text onClick={onOpen} cursor="pointer" fontSize="20px" fontWeight="bold"  ml="7px" >Filter
       </Text>
       <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Filter</DrawerHeader>
          <DrawerBody>
            <SideBar  joggers={joggers} setJoggers={setJoggers} jeans={jeans} setJeans={setJeans} sweatshirt={sweatshirt} setSweatshirt={setSweatshirt} trousers={trousers} setTrousers={setTrousers} chinos={chinos} setChinos={setChinos} casualshirt={casualshirt} setCasualShirt={setCasualShirt} roadster={roadster} setRoadster={setRoadster} highlander={highlander} setHighlander={setHighlander} locomotive={locomotive} setLocomotive={setLocomotive} ivoc={ivoc} setIvoc={setIvoc} slider={slider} setSlider={setSlider} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>

      <Box  flex={1} p="15px 15px"  >
        <ProductHeader products={products} search={search} setSearch={setSearch} sort={sort} setSort={setSort} popularity={popularity} setPopularity={setPopularity}   />

        <hr/>

        <GridLayout products={products}/>
      </Box>
   
    </Box>
    </>
  )
}

export default MenProducts