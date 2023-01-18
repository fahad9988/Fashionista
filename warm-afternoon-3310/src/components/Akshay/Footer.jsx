import { Box, Heading, Image, Text, VStack ,Input,Button} from '@chakra-ui/react';
import React from 'react';
import HP from "./Images/HelpCenter.png"
import SP from "./Images/SecurePayment.png"
import SOTG from "./Images/ShopOnTheGo.png"
import TP from "./Images/Trustpay.png"
const data=[
    {src:HP,title:"100% SECURE PAYMENTS",text:"Moving your card details to a much more secured place"},
    {src:SP,title:"TRUSTPAY",text:"100% Payment Protection. Easy Return Policy"},
    {src:SOTG,title:"HELP CENTER",text:"Got a question? Look no further Browse our FAQs or submit your query here"},
    {src:TP,title:"SHOP ON THE GO",text:"Download the app and get exciting app only offers at your fingertips"}
]
function Footer() {
  return (
    <Box mt="70px">
        <Box   display="flex" justifyContent={"center"} m="auto" borderTop="1px solid lightgray" borderBottom="1px solid lightgray">
            {data.map((el,i)=>(
                <Box textAlign={"center"}  display="flex"  gap="10px"flexDirection="column" alignItems="center" borderLeft={i==0?"1px solid lightgray":"none"} borderRight="1px solid lightgray" p="20px" px="30px" w="23%">
                    <Image src={el.src} boxSize="100px" >
                    </Image>
                    <Heading fontSize="18px" color="#494141">{el.title}</Heading>
                    <Text color="gray" fontSize={"sm"}>{el.text}</Text>
                </Box>
            ))}
        </Box>
        <Box  display="flex" justifyContent={"center"} m="auto" py="30px" borderBottom={"1px solid lightgray"}>
            <VStack alignItems={"flex-start"}  fontSize="12px" p="10px"lineHeight={"10px"} color="gray" w="18%">
                <Heading fontSize={"16px"} color="black">POLICY INFO</Heading>
                <Text>Privacy Policy</Text>
                <Text>Terms of Sale</Text>
                <Text>Terms of Use</Text>
                <Text>Report Abuse & Takedown Policy</Text>
                <Text>FAQ</Text>
            </VStack>
            
            <VStack alignItems={"flex-start"}  fontSize="12px" p="10px"lineHeight={"10px"} color="gray" w="18%">
                <Heading fontSize={"16px"} color="black">COMPANY</Heading>
                <Text>Impact@Snapdeal</Text>
                <Text>Careers</Text>
                <Text>Blog</Text>
                <Text>Sitemap</Text>
                <Text>Contact Us</Text>
            </VStack>
            
            <VStack alignItems={"flex-start"}  fontSize="12px" p="10px"lineHeight={"10px"} color="gray" w="18%">
                <Heading fontSize={"16px"} color="black">SNAPDEAL BUSINESS</Heading>
                <Text>Shopping App</Text>
                <Text>Sell on Snapdeal</Text>
                <Text>Media Enquiries</Text>
            </VStack>
            
            <VStack alignItems={"flex-start"}  fontSize="12px" p="10px"lineHeight={"10px"} color="gray" w="18%">
                <Heading fontSize={"16px"} color="black">POPULAR LINKS</Heading>
                <Text>Lehnga</Text>
                <Text>Kid's Clothing</Text>
                <Text>Sarees</Text>
                <Text>Winter Wear</Text>
            </VStack>
            <VStack alignItems={"flex-start"}  fontSize="12px" p="10px"lineHeight={"10px"} color="gray" w="18%">
            <Heading fontSize={"16px"} color="black">SUBSCRIBE</Heading>
                <Box display={"flex"}>
                    <Input placeholder="Your email address" borderRightRadius={"0px"}></Input>
                    <Button bgColor={"black"} fontSize="xs" color="white" borderLeftRadius={"none"}>SUBSCRIBE</Button>
                </Box>
            <Text lineHeight={"15px"}>Register now to get updates on promotions and coupons. <a color='blue'>Or Download App</a></Text>
            </VStack>
            
        </Box>
    </Box>
  );
}

export default Footer;
