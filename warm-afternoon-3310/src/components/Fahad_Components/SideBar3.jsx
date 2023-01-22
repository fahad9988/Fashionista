import React from 'react';
import {
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Spacer,
} from "@chakra-ui/react";

import { Box } from '@chakra-ui/react';
import SideBarHeader3 from './SideBarHeader3';

const SideBar3 = ({   sweatshirt,setSweatshirt,tshirt,setTshirt,trackpants,setTrackpants,blazer ,setBlazer  ,hellcat,setHellcat,hopscotch,setHopscotch,plumtree,setPlumtree,max,setMax,slider,setSlider,low,high}) => {
  return (
    <>
    <Box   textAlign="left" fontSize="15px" cursor="pointer" position="sticky"  top={75}  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px;" pb="40px" >
      <Flex flexDirection="column"  p="15px 15px">
        <SideBarHeader3/>

        <Accordion  defaultIndex={[0]} allowMultiple mt="17.6px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Category
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection="column">
                <Checkbox value="Track Pants" size={{sm:"sm",md:"sm",lg:"md"}}  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setTrackpants(value)
                   }else{
                     let new_str=trackpants.replace(value,"")
                     setTrackpants(new_str)
                   }
                }} >
                  <Text color="grey">
                    Track Pants
                  </Text>
                </Checkbox>
                <Checkbox value="T-shirt" size={{sm:"sm",md:"sm",lg:"md"}}  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setTshirt(value)
                   }else{
                     let new_str=tshirt.replace(value,"")
                     setTshirt(new_str)
                   }
                }} >
                  <Text  color="grey">
                    T-Shirt
                  </Text>
                </Checkbox>
                <Checkbox value="Blazer" size={{sm:"sm",md:"sm",lg:"md"}}  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setBlazer(value)
                   }else{
                     let new_str=blazer.replace(value,"")
                     setBlazer(new_str)
                   }
                }} >
                  <Text color="grey">
                    Blazer
                  </Text>
                </Checkbox>
                <Checkbox value="Sweatshirt" size={{sm:"sm",md:"sm",lg:"md"}}  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setSweatshirt(value)
                   }else{
                     let new_str=sweatshirt.replace(value,"")
                     setSweatshirt(new_str)
                   }
                }} >
                  <Text color="grey">
                   Sweatshirt
                  </Text>
                </Checkbox>
                
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Brand
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection="column">
                <Checkbox  value="HELLCAT" size={{sm:"sm",md:"sm",lg:"md"}} onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setHellcat(value)
                   }else{
                     let new_str=hellcat.replace(value,"")
                     setHellcat(new_str)
                   }
                }}>
                  <Text color="grey">
                    Hellcat
                  </Text>
                </Checkbox>
                <Checkbox  value="Hopscotch" size={{sm:"sm",md:"sm",lg:"md"}} onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setHopscotch(value)
                   }else{
                     let new_str=hopscotch.replace(value,"")
                     setHopscotch(new_str)
                   }
                }}>
                  <Text  color="grey">
                    Hopscotch
                  </Text>
                </Checkbox>
                <Checkbox value="PLUM TREE" size={{sm:"sm",md:"sm",lg:"md"}} onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setPlumtree(value)
                   }else{
                     let new_str=plumtree.replace(value,"")
                     setPlumtree(new_str)
                   }
                }} >
                  <Text  color="grey">
                    Plum Tree
                  </Text>
                </Checkbox>
                <Checkbox value="max" size={{sm:"sm",md:"sm",lg:"md"}} onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setMax(value)
                   }else{
                     let new_str=max.replace(value,"")
                     setMax(new_str)
                   }
                }} >
                  <Text  color="grey">
                    MAX
                  </Text>
                </Checkbox>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} >
              <Flex flexDirection="column" >
                <Box p="0px 15px" >
                <RangeSlider colorScheme="red" aria-label={['min', 'max']} defaultValue={[0, 100]} onChange={(val)=>{
                setSlider(val)
              }} >
                   <RangeSliderTrack>
                     <RangeSliderFilledTrack />
                   </RangeSliderTrack>
                   <RangeSliderThumb bgColor="red.200" index={0} />
                   <RangeSliderThumb bgColor="red.200" index={1} />
               </RangeSlider>
                </Box>
              
            <Flex direction="row">
            <Box fontSize={{md:"13px",lg:"15px"}} >Rs. {low?low.toFixed():0}</Box>
            <Spacer/>
            <Box fontSize={{md:"13px",lg:"15px"}} >Rs. {high?high.toFixed():1499}</Box>
            </Flex>

              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Size
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection="column">
                <Checkbox size={{sm:"sm",md:"sm",lg:"md"}} >
                  <Text  color="grey">
                    XS
                  </Text>
                </Checkbox>
                <Checkbox size={{sm:"sm",md:"sm",lg:"md"}} >
                  <Text  color="grey">
                    S
                  </Text>
                </Checkbox>
                <Checkbox size={{sm:"sm",md:"sm",lg:"md"}} >
                  <Text  color="grey">
                    M
                  </Text>
                </Checkbox>
                <Checkbox size={{sm:"sm",md:"sm",lg:"md"}} >
                  <Text  color="grey">
                    L
                  </Text>
                </Checkbox>
                <Checkbox size={{sm:"sm",md:"sm",lg:"md"}} >
                  <Text  color="grey">
                    XL
                  </Text>
                </Checkbox>
                <Checkbox size={{sm:"sm",md:"sm",lg:"md"}} >
                  <Text  color="grey">
                    XXL
                  </Text>
                </Checkbox>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  </>
  )
}

export default SideBar3