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
import SideBarHeader2 from './SideBarHeader2';

const SideBar2 = ({   kurta,setKurta,jeans,setJeans,saree,setSaree,trousers ,setTrousers  ,kalini,setKalini,anouk,setAnouk,khushalk,setKhushalk,fashor,setFashor,slider,setSlider}) => {
  return (
    <>
    <Box   textAlign="left" fontSize="15px" cursor="pointer" position="sticky" top={0} boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px;" pb="40px" >
      <Flex flexDirection="column"  p="15px 15px">
        <SideBarHeader2/>

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
                <Checkbox value="Saree" size={{sm:"sm",md:"sm",lg:"md"}}  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setSaree(value)
                   }else{
                     let new_str=saree.replace(value,"")
                     setSaree(new_str)
                   }
                }} >
                  <Text color="grey">
                    Saree
                  </Text>
                </Checkbox>
                <Checkbox value="Jeans" size={{sm:"sm",md:"sm",lg:"md"}}  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setJeans(value)
                   }else{
                     let new_str=jeans.replace(value,"")
                     setJeans(new_str)
                   }
                }} >
                  <Text  color="grey">
                    Jeans
                  </Text>
                </Checkbox>
                <Checkbox value="Trousers" size={{sm:"sm",md:"sm",lg:"md"}}  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setTrousers(value)
                   }else{
                     let new_str=trousers.replace(value,"")
                     setTrousers(new_str)
                   }
                }} >
                  <Text color="grey">
                    Trousers
                  </Text>
                </Checkbox>
                <Checkbox value="Kurta" size={{sm:"sm",md:"sm",lg:"md"}}  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setKurta(value)
                   }else{
                     let new_str=kurta.replace(value,"")
                     setKurta(new_str)
                   }
                }} >
                  <Text color="grey">
                   Kurta
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
                <Checkbox  value="KALINI" size={{sm:"sm",md:"sm",lg:"md"}} onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setKalini(value)
                   }else{
                     let new_str=kalini.replace(value,"")
                     setKalini(new_str)
                   }
                }}>
                  <Text color="grey">
                    Kalini
                  </Text>
                </Checkbox>
                <Checkbox  value="Anouk" size={{sm:"sm",md:"sm",lg:"md"}} onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setAnouk(value)
                   }else{
                     let new_str=anouk.replace(value,"")
                     setAnouk(new_str)
                   }
                }}>
                  <Text  color="grey">
                    Anouk
                  </Text>
                </Checkbox>
                <Checkbox value="Khushal K" size={{sm:"sm",md:"sm",lg:"md"}} onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setKhushalk(value)
                   }else{
                     let new_str=khushalk.replace(value,"")
                     setKhushalk(new_str)
                   }
                }} >
                  <Text  color="grey">
                    Khushal K
                  </Text>
                </Checkbox>
                <Checkbox value="FASHOR" size={{sm:"sm",md:"sm",lg:"md"}} onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setFashor(value)
                   }else{
                     let new_str=fashor.replace(value,"")
                     setFashor(new_str)
                   }
                }} >
                  <Text  color="grey">
                    Fashor
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
            <Box fontSize={{md:"13px",lg:"15px"}} >Rs. 0</Box>
            <Spacer/>
            <Box fontSize={{md:"13px",lg:"15px"}} >Rs. 7890</Box>
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

export default SideBar2