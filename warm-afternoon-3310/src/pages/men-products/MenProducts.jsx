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
    <Box display={{sm:"block",md:"flex"}} position="relative" p="10px">

      <Box flex={0.3} display={{sm:"none",md:"block"}} >
      <SideBar 
      joggers={joggers} setJoggers={setJoggers} jeans={jeans} setJeans={setJeans} sweatshirt={sweatshirt} setSweatshirt={setSweatshirt} trousers={trousers} setTrousers={setTrousers} chinos={chinos} setChinos={setChinos} casualshirt={casualshirt} setCasualShirt={setCasualShirt} roadster={roadster} setRoadster={setRoadster} highlander={highlander} setHighlander={setHighlander} locomotive={locomotive} setLocomotive={setLocomotive} ivoc={ivoc} setIvoc={setIvoc} slider={slider} setSlider={setSlider} low={low} high={high}
      />
      </Box>

      <Box display={{sm:"flex",md:"none"}} alignItems="center" >
       <BsFillFilterSquareFill onClick={onOpen} fontSize={20} color="#E40046" />
       <Text onClick={onOpen} cursor="pointer" fontSize="20px" fontWeight="bold"  ml="7px" >Filter</Text>
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

        {
        products.loading && <Box display="grid" gridTemplateColumns={{
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl:"repeat(4,1fr)"
        }} gap="20px" >
         {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((box)=>{
          return <Skeleton h="250px" key={box} >hi</Skeleton>
         })}
         </Box>
        }

        {
         products.data.length === 0 && (
            <Box>
              <Image
                width="600px"
                h="500px"
                m="auto"
                src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
              />
            </Box>
          )
        }

         <Grid  
        
            templateColumns={{
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl:"repeat(4,1fr)"
            }}
            rowGap="20px"
            
            mt="15px"
            >
          {
            products.data?.map((item)=>{
              return <Link to={`/products/${item.id}`} >
              <GridItem m="auto" p="15px 7px" minW="210px" maxWidth="260px" key={item.id} position="relative" className='product-card'>
            
                 <Image
                  m="auto"
                  src={item.images[0]}
                  width="200px"
                  height="230px"
                  alt="image"
                />
                <Text color="#748A9C" fontSize="14px" mt={2}>{item.subtitle}</Text>
                <Text color="#748A9C" fontSize="14px" >{item.title}</Text>
                <HStack display="flex" h="30px"  alignItems="center" flexWrap="wrap">
                <Text fontSize="13px" color="#D6D0DB" textDecoration="line-through">
                    Rs. {item.strike_price}
                  </Text>
                <b fontSize="13px">Rs. {item.discounted_price}</b>
                 
                  <Tag size="xs" fontSize="12px" colorScheme="gray">{item.discount}</Tag>
                </HStack>
                
                <Box display="flex"  alignItems="center" >
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        boxSize={3}
                        key={i}
                        color={
                          i < Math.floor(item.rating) ? "yellow.400" : "gray.300"
                        }
                      />
                    ))}
                  <Box as="span"  ml="2" color="#D6D0DB" fontSize="sm">
                    ({item.rating})
                  </Box>
                </Box>
              </GridItem>
              </Link>
            })
          }
         </Grid>
      </Box>
   
    </Box>
    </>
  )
}

export default MenProducts