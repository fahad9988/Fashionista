import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
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
import SideBarHeader from './SideBarHeader';

const SideBar = ({   joggers,setJoggers,jeans,setJeans,sweatshirt,setSweatshirt,trousers ,setTrousers ,chinos ,setChinos ,casualshirt ,setCasualShirt ,roadster,setRoadster,highlander,setHighlander,locomotive,setLocomotive,ivoc,setIvoc,slider,setSlider}) => {



  return (
    <>
    <Box   textAlign="left" fontSize="15px" cursor="pointer" position="sticky" top={0} >
      <Flex flexDirection="column"  p="14px 15px">
         
          <SideBarHeader/>

        <Accordion allowToggle mt="17.5px">
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
                <Checkbox value="Sweatshirt"  onChange={(e)=>{
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
                <Checkbox value="Jeans"  onChange={(e)=>{
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
                <Checkbox value="Trousers"  onChange={(e)=>{
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
                <Checkbox value="Joggers"  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setJoggers(value)
                   }else{
                     let new_str=joggers.replace(value,"")
                     setJoggers(new_str)
                   }
                }} >
                  <Text color="grey">
                   Joggers
                  </Text>
                </Checkbox>
                <Checkbox value="Chinos"  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setChinos(value)
                   }else{
                     let new_str=chinos.replace(value,"")
                     setChinos(new_str)
                   }
                }} >
                  <Text color="grey">
                   Chinos
                  </Text>
                </Checkbox>
                <Checkbox value="Casual Shirt"  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setCasualShirt(value)
                   }else{
                     let new_str=casualshirt.replace(value,"")
                     setCasualShirt(new_str)
                   }
                }} >
                  <Text color="grey">
                   Casual Shirt
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
                <Checkbox  value="Roadster"  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setRoadster(value)
                   }else{
                     let new_str=roadster.replace(value,"")
                     setRoadster(new_str)
                   }
                }}>
                  <Text color="grey">
                    Roadster
                  </Text>
                </Checkbox>
                <Checkbox  value="HIGHLANDER"  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setHighlander(value)
                   }else{
                     let new_str=highlander.replace(value,"")
                     setHighlander(new_str)
                   }
                }}>
                  <Text  color="grey">
                    Highlander
                  </Text>
                </Checkbox>
                <Checkbox value="LOCOMOTIVE"  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setLocomotive(value)
                   }else{
                     let new_str=locomotive.replace(value,"")
                     setLocomotive(new_str)
                   }
                }} >
                  <Text  color="grey">
                    Locomotive
                  </Text>
                </Checkbox>
                <Checkbox value="IVOC"  onChange={(e)=>{
                   let {value,checked} =e.target;
                   if(checked){
                     setIvoc(value)
                   }else{
                     let new_str=ivoc.replace(value,"")
                     setIvoc(new_str)
                   }
                }} >
                  <Text  color="grey">
                    IVOC
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
            <Box>Rs. 0</Box>
            <Spacer/>
            <Box>Rs. 3199</Box>
            </Flex>

              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Pattern
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection="column">
                <Checkbox>
                  <Text  color="grey">
                    Stripped
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text  color="grey">
                    Printed
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text  color="grey">
                    Plain
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text  color="grey">
                    Patterened
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text  color="grey">
                    Embellished
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text  color="grey">
                    Checked
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

export default SideBar