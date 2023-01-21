import React from 'react';
import {useParams} from "react-router-dom";
import {Box,Image,Flex,Text,Tag, Button, Input ,UnorderedList,ListItem,useToast } from "@chakra-ui/react"
import {useSelector,useDispatch} from "react-redux";
import { getSingleProduct } from '../../redux/product/product.action';
import DetailHeader from '../../components/Fahad_Components/DetailHeader';
import {AiFillTag} from "react-icons/ai";
import "./SingleProduct.css";
import {addCart} from "../../redux/cart/cart.action";
import { getCartItems } from '../../redux/cart/cart.action';
import { useNavigate } from 'react-router-dom';
import { addWishlist, getWishlistItems } from '../../redux/wishlist/wishlist.action';
import {TrendingSlider} from "../../components/Akshay/Carousel_2"



const SingleProduct = () => {
const [size,setSize]=React.useState("") ; 
const [pincode,setPincode]=React.useState("");
const [toggle,setToggle]=React.useState(false);
const {id}=useParams();
const product=useSelector((Store)=>{
  return Store.productManager.product
});
const cartItems=useSelector((store)=>{
  return store.cart.cart;
});
const wishlistItems=useSelector((store)=>{
  return store.wishlist.wishlist;
});



const dispatch=useDispatch();
const toast=useToast();

React.useEffect(()=>{
dispatch(getSingleProduct(id));
dispatch(getCartItems());
dispatch(getWishlistItems())
},[]);



const navigate=useNavigate()

const handleClick=()=>{
  if(size==""){
    toast({
      title: 'Select Size.',
      description: "Please select one of the sizes.",
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position:"top"
    })
  }else{
    dispatch(addCart({...product,size:size}));
    toast({
      title: 'Add to Cart.',
      description: "Item added to Cart Successfully.",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:"top"
    })
    
  }

}

const goToCart=()=>{
  navigate("/productCart")
}

let exist=false;
let mySize;
cartItems.forEach((e)=>{
  if(e.id==id){
 exist=true;
 mySize=e.size;
  }
})

const AddToWishlist=()=>{
  dispatch(addWishlist({...product}));
    toast({
      title: 'Add to Wishlist.',
      description: "Item added to Wishlist Successfully.",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:"top"
    })

}

let wishExist=false;
wishlistItems.forEach((e)=>{
  if(e.id==id){
 wishExist=true;
  }
});

const goToWishlist=()=>{
  navigate("/wishlist")
}


  return (
    <>
   <Box display={{lg:"flex",base:"block"}}  w="90%" m="auto" mt="40px"  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
    <Box flex={{xl:"0.5",lg:"0.6"}}  p={{xl:"25px",lg:"25px 10px",md:"25px",base:"25px"}}  >
     <Image fallbackSrc='https://t4.ftcdn.net/jpg/02/49/21/53/360_F_249215319_qMcKnElEzzo2xSVZI584GfVtvJTpSAL8.jpg' m={{lg:"0px",base:"auto"}} w="100%" maxW={{lg:"100%",base:"350px"}} src={product.images} />
    </Box>

    <Box flex="1"  p="30px"  >
     <DetailHeader product={product} />

      <hr style={{marginTop:"10px"}} />

      <Flex direction={{sm:"row",base:"column"}} mt="20px" mb="10px" >
        <Box flex="1"  >
         <Text color="#C6C0BD"  fontSize={{md:"14px",base:"13px"}}><span style={{marginRight:"5px"}}>MRP</span><span style={{textDecoration:"line-through"}} >RS. {product.strike_price}</span>
         <span className='taxes' style={{marginLeft:"5px"}} >(Inclusive of all Taxes)</span>
         </Text>
         <Box display="flex" >
          <Box mr="10px" >
            <Text color="#FF2341" fontSize={{md:"22px",base:"18px"}}>RS. {product.discounted_price}</Text>
          </Box>
          <Box display="flex" alignItems="center" >
            <Tag >{product.discount}</Tag>
          </Box>
         </Box>
        </Box>

        <Box flex="1"  display="flex" justifyContent="flex-end" >
          <Box width={{xl:"80%",lg:"100%",md:"90%",base:"100%"}} >
          <Box mb="7px" >
            <Text fontSize={{xl:"15px",lg:"14px",md:"14px",base:"11px"}} color="#747774" >(2) Offers | Applicable on Cart</Text>
          </Box>
          <Box border="2px solid #747774" p="10px 10px" borderStyle="dashed">
            <Flex mb="5px" pb="5px" borderBottom="1px solid #747774">
              <Box flex="0.20">
                <Tag size={{xl:"md",lg:"sm",md:"md",base:"xs"}} bgColor="#5EA8C8" p={{xl:"4px 4px",lg:"2px 2px",md:"4px 4px",base:"2px 2px"}} >
                <AiFillTag color="white" fontSize={20} />
                </Tag>
                
              </Box>
              <Box flex="1">
                <Text lineHeight={1.3} color="#747774" fontSize={{xl:"15px",lg:"14px",md:"14px",base:"11px"}}>15% Instant Discount Using AU Small Finance Bank Debit & Credit Cards.</Text>
                </Box>
            </Flex>
            <Flex>
              <Box flex="0.20">
                <Tag size={{xl:"md",lg:"sm",md:"md",base:"xs"}} bgColor="#5EA8C8" p={{xl:"4px 4px",lg:"2px 2px",md:"4px 4px",base:"2px 2px"}}  >
                <AiFillTag color="white" fontSize={20} />
                </Tag>
                
              </Box>
              <Box flex="1">
                <Text lineHeight={1.3} color="#747774" fontSize={{xl:"15px",lg:"14px",md:"14px",base:"11px"}}>Apply for a Snapdeal BOB Credit Card & get 5% Unlimited Cashback.</Text>
                </Box>
            </Flex>
          </Box>
          </Box>
        </Box>

      </Flex>

      <Box p="20px 0px"  >
       <Flex>
        <Box  flex={{xl:"0.15",lg:"0.2",md:"0.2",base:"0.25"}}  display="flex" alignItems="center"  >
          <Text fontSize={{md:"16px",base:"13px"}}>Size</Text>
        </Box>
        {mySize?
         <Box flex="1" flexWrap="wrap" display={{md:"block",base:"flex"}} alignContent="space-between" >
         <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={mySize=="XS"?"red.200":"#EDF2F7"} >XS</Tag>
         <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={mySize=="S"?"red.200":"#EDF2F7"} >S</Tag>
         <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={mySize=="M"?"red.200":"#EDF2F7"} >M</Tag>
         <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={mySize=="L"?"red.200":"#EDF2F7"} >L</Tag>
         <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={mySize=="XL"?"red.200":"#EDF2F7"} >XL</Tag>
         <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={mySize=="XXL"?"red.200":"#EDF2F7"} >XXL</Tag>
       </Box>
        :
          <Box flex="1" flexWrap="wrap" display={{md:"block",base:"flex"}} alignContent="space-between" >
          <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={size=="XS"?"red.200":"#EDF2F7"} onClick={()=>{setSize("XS")}} >XS</Tag>
          <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={size=="S"?"red.200":"#EDF2F7"} onClick={()=>{setSize("S")}}>S</Tag>
          <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={size=="M"?"red.200":"#EDF2F7"} onClick={()=>{setSize("M")}}>M</Tag>
          <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={size=="L"?"red.200":"#EDF2F7"} onClick={()=>{setSize("L")}}>L</Tag>
          <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={size=="XL"?"red.200":"#EDF2F7"} onClick={()=>{setSize("XL")}}>XL</Tag>
          <Tag size={{md:"lg",base:"sm"}} cursor="pointer" mr="12px" mb={{md:"0px",base:"7px"}} mt={{md:"0px",base:"7px"}} bgColor={size=="XXL"?"red.200":"#EDF2F7"} onClick={()=>{setSize("XXL")}}>XXL</Tag>
        </Box>
          }
        <Box flex={{md:"0.2",base:"0.3"}}    display={{md:"flex",base:"none"}} alignItems="center" >
          <Text fontSize={{md:"16px",base:"13px"}} color="#63ADEF" >Size Chart</Text>
        </Box>
       </Flex>

       <Box display="flex" h={{xl:"125px",lg:"105px",md:"105px",base:"75px"}}   alignItems="center" >
        <Box flex={{md:"0.15",sm:"0.25",base:"0"}}  display={{md:"block",base:"block"}} ></Box>
        <Box flex="1" >
         {
         exist?<Button mr={{md:"20px",base:"5px"}} size={{xl:"lg",lg:"md",md:"md",base:"xs"}} bgColor="#333333" color="white" borderRadius="3px" _hover={{bgColor:"white",color:"#333333",border:"2px solid #333333"}} onClick={goToCart} >
          GO TO CART
          </Button>
          :
          <Button mr={{md:"20px",base:"5px"}} size={{xl:"lg",lg:"md",md:"md",base:"xs"}} bgColor="#333333" color="white" borderRadius="3px" _hover={{bgColor:"white",color:"#333333",border:"2px solid #333333"}} onClick={handleClick} >
          ADD TO CART
          </Button>
          }

          {wishExist?<Button size={{xl:"lg",lg:"md",md:"md",base:"xs"}} bgColor="#E40046" color="white" borderRadius="3px" _hover={{bgColor:"white",color:"#E40046",border:"2px solid #E40046"}} onClick={goToWishlist} >GO TO WISHLIST</Button>
          :
          <Button size={{xl:"lg",lg:"md",md:"md",base:"xs"}} bgColor="#E40046" color="white" borderRadius="3px" _hover={{bgColor:"white",color:"#E40046",border:"2px solid #E40046"}} onClick={AddToWishlist} >ADD TO WISHLIST</Button>
        }
         
        </Box>
        <Box flex="0.2" display={{md:"block",base:"none"}} ></Box>
       </Box>

       <Box display="flex"   >
        <Box flex={{xl:"0.15",lg:"0.2",md:"0.2",base:"0.25"}} display="flex" alignItems="center" >
        <Text  fontSize={{md:"16px",base:"13px"}}>Delivery</Text>
        </Box>
        <Box flex="1" >
        <Box >
         {toggle?<Text fontSize={{md:"16px",base:"13px"}}>Item is available at 208001. <span style={{cursor:"pointer",color:"#86D4FB"}} onClick={()=>{
          setToggle(false);
         }} >Change</span></Text>:<Input size={{md:"sm",base:"xs"}} variant="flushed" focusBorderColor={pincode=="208001"?"green.400":"red.400"} width="auto" placeholder='Check your pincode' value={pincode} onChange={(e)=>{setPincode(e.target.value)}} onKeyPress={(e)=>{
            if(e.key=="Enter"){
              e.preventDefault();
              if(pincode=="208001"){
                setToggle(true)
              }
            }
          }} />} 
        </Box>
        </Box>
        <Box flex={{md:"0.2",base:"0.3"}} display={{md:"flex",base:"none"}} ></Box>
       </Box>

       <Box display="flex"   >
        <Box flex={{xl:"0.15",lg:"0.2",md:"0.2",base:"0.25"}}></Box>
        <Box flex="1" >
        <Box>
         <UnorderedList>
          <ListItem fontSize={{md:"16px",base:"13px"}}>Delivery in 4-6 days</ListItem>
          <ListItem fontSize={{md:"16px",base:"13px"}} >Cash on Delivery also available for this location</ListItem>
         </UnorderedList>
        </Box>
        </Box>
        <Box flex={{md:"0.2",base:"0.3"}} display={{md:"flex",base:"none"}} ></Box>
       </Box>
      </Box>
    </Box>
   </Box>
   <Box w="90%" m="auto" mt="50px" >
   <TrendingSlider/>
   </Box>

   </>
  )
}

export default SingleProduct