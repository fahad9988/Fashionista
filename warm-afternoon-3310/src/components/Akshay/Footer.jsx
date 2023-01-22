import { Box, Heading, Image, Text, VStack ,Input,Button,Grid, SimpleGrid,Icon,Flex} from '@chakra-ui/react';
import React from 'react';
import HP from "./Images/HelpCenter.png"
import SP from "./Images/SecurePayment.png"
import SOTG from "./Images/ShopOnTheGo.png"
import TP from "./Images/Trustpay.png"
import p1 from "./Images/p1.png"
import p2 from "./Images/p2.png"
import p3 from "./Images/p3.png"
import p4 from "./Images/p4.png"
import nb from "./Images/nb.png"
import cod from "./Images/cod.png"
import {AiFillLinkedin} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
const data=[
    {src:HP,title:"100% SECURE PAYMENTS",text:"Moving your card details to a much more secured place"},
    {src:SP,title:"TRUSTPAY",text:"100% Payment Protection. Easy Return Policy"},
    {src:SOTG,title:"HELP CENTER",text:"Got a question? Look no further Browse our FAQs or submit your query here"},
    {src:TP,title:"SHOP ON THE GO",text:"Download the app and get exciting app only offers at your fingertips"}
]
function Footer() {
  return (
    <Box mt="70px">
        <SimpleGrid  columns={[1,2,4]} justifyContent={"center"} m="auto" borderTop="1px solid lightgray" borderBottom="1px solid lightgray">
            {data.map((el,i)=>(
                <Box key={i} textAlign={"center"}  display="flex"  gap="10px"flexDirection="column" alignItems="center" borderLeft={i==0?"1px solid lightgray":"none"} borderRight="1px solid lightgray" p="20px" px="30px" >
                    <Image src={el.src} boxSize="100px" >
                    </Image>
                    <Heading fontSize="18px" color="#494141">{el.title}</Heading>
                    <Text color="gray" fontSize={"sm"}>{el.text}</Text>
                </Box>
            ))}
        </SimpleGrid>
        <Flex  borderBottom={"1px solid lightgray"}>
        <Grid flex={1} templateColumns={{
            base:"repeat(1,1fr)",
            sm:"repeat(2,1fr)",
            md:"repeat(3,1fr)",
            lg:"repeat(4,1fr)"
        }} textAlign="left"  py="30px" >
            <Box display="flex" flexDirection="column"   alignItems={"center"} fontSize="12px" p="10px" color="gray"  >
                <Heading fontSize={"16px"} color="black">POLICY INFO</Heading>
                <Text>Privacy Policy</Text>
                <Text>Terms of Sale</Text>
                <Text>Terms of Use</Text>
                <Text>Report Abuse & Takedown Policy</Text>
                <Text>FAQ</Text>
            </Box>
            
            <Box display="flex" flexDirection="column" alignItems={"center"}  fontSize="12px" p="10px" color="gray" >
                <Heading fontSize={"16px"} color="black">COMPANY</Heading>
                <Text>Impact@Snapdeal</Text>
                <Text>Careers</Text>
                <Text>Blog</Text>
                <Text>Sitemap</Text>
                <Text>Contact Us</Text>
            </Box>
            
            <Box display="flex" flexDirection="column" alignItems={"center"}   fontSize="12px" p="10px" color="gray" >
                <Heading fontSize={"16px"} color="black">SNAPDEAL BUSINESS</Heading>
                <Text>Shopping App</Text>
                <Text>Sell on Snapdeal</Text>
                <Text>Media Enquiries</Text>
            </Box>
            
            <Box  display="flex" flexDirection="column" alignItems={"center"}  fontSize="12px" p="10px" color="gray" >
                <Heading fontSize={"16px"} color="black">POPULAR LINKS</Heading>
                <Text>Lehnga</Text>
                <Text>Kid's Clothing</Text>
                <Text>Sarees</Text>
                <Text>Winter Wear</Text>
            </Box>
            </Grid>
            <Box flex={0.4} display={{base:"none",lg:"flex"}} flexDirection="column" alignItems={"center"}   fontSize="12px" pt="30px" color="gray" >
            <Heading fontSize={"16px"} color="black" mb="10px">SUBSCRIBE</Heading>
                <Box display={"flex"} >
                    <Input placeholder="Your email address" borderRightRadius={"0px"}></Input>
                    <Button bgColor={"black"} fontSize="xs" color="white" borderLeftRadius={"none"}>SUBSCRIBE</Button>
                </Box>
            <Text lineHeight={"15px"} w="80%" mt="10px">Register now to get updates on promotions and coupons. <a color='blue'>Or Download App</a></Text>
            </Box>
            </Flex>

        <Box display="flex" justifyContent={"space-evenly"} m="auto" p="30px" borderBottom={"1px solid lightgray"}>
            <Box>
                <Heading fontSize={"15px"} mb="10px">
                    PAYMENT
                </Heading>
            <SimpleGrid columns={[2,3,6]} gap="10px">
                <Image src={p1} h="25px"></Image>
                <Image src={p2} h="25px"></Image>
                <Image src={p3} h="25px"></Image>
                <Image src={p4} h="25px"></Image>
                <Image src={cod}h="25px"></Image>
                <Image src={nb} h="25px"></Image>
            </SimpleGrid>
            </Box>
            <Box >
            <Heading fontSize={"15px"} mb="10px">
                CONNECT
            </Heading>
            <SimpleGrid columns={[2,4,7]} gap="10px">
                <Icon cursor={"pointer"} fontSize={"30px"} as={AiFillLinkedin}></Icon>
                <Icon cursor={"pointer"} fontSize={"30px"} as={BsTelegram}></Icon>
                <Icon cursor={"pointer"} fontSize={"30px"} as={BsFacebook}></Icon>
                <Icon cursor={"pointer"} fontSize={"30px"} as={AiFillTwitterCircle}></Icon>
                <Icon cursor={"pointer"} fontSize={"30px"} as={AiFillYoutube}></Icon>
                <Icon cursor={"pointer"} fontSize={"30px"} as={AiFillInstagram}></Icon>
                <Icon cursor={"pointer"} fontSize={"30px"} as={IoLogoWhatsapp}></Icon>
            </SimpleGrid>
            </Box>
        </Box>
        <Box fontSize="12px" p="40px" py="60px" bgColor={"lightgray"}>
            <Text>
               <b>Men: </b>  Shirts for Men / Casual Shirts for Men / Formal Shirts for Men / Hoodies for Men / Cotton Shirts for Men / T Shirts for Men / Polo T shirts / Kurta Pajama for Men / White Shirt / Black Shirt / Lower for Men / Trousers for Men / Jacket for Men / Formal Pants for Men / Tracksuit for Men / Jeans for Men / Kurta Payjama Sets / Kurta for Men / Blazer for Men / Sweater for Men
            </Text>
            <Text>
                <b>Women: </b>Tops for Women / Kurti / Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees / Dresses for Women / Jumpsuit for Women / Jeans for Women / Salwar Suit / Bra / Jacket for Women / Night Dress for Women / Sweatshirt for Women / Shorts for Women / Readymade Blouse / Dupatta / T Shirt for Women / Shirts for Women / Skirts for Women / Ethnic wear for Women / Western Dresses for Women / Leggings for Women
            </Text>
            <Text>
                <b>Footwear: </b>Men's Footwear / Casual Shoes for Men / Formal Shoes for Men / Loafers for Men / Slippers for Men / Boots for Men / Sandals for Men / Footwear for Women / Heels for Women / Sandals for Women / Shoes for Women / Sandals for Women / Slippers for Women / Boots for Women / Jutti for Women / Sports Shoes for Women
            </Text>
            <Text>
                <b>Home & Kitchen: </b>Wall Painting / Wall Stickers / Dream Catcher / Rangoli Designs / Clock / Wall Clock / Alarm Clock / Diya / Bean Bag / Laptop Table / Study Table / Wall Hanging / Ceiling Lights / Table Lamp / Hanging Lights / LED Bulbs / Torch Light / LED Lights / Flower Vase / Keychain / Rudraksha / Screwdriver
            </Text>
            <Text>
                <b>Watch: </b>Watch For Men / Womens Watches / Smart Watch / Boys Watch / Girls Watch
            </Text>
            <Text>
                <b>Home Furnishing: </b>Bed Sheet / Mosquito Net / Mattress / Curtains / Sofa Cover / Blanket / Pillow / Carpet / Apron / Quilt / Floor Mat / Towel / Pillow Cover
            </Text>
            <Text>
                <b>Electronics: </b>Bluetooth Speakers / Headphones / Earphone / Ceiling Fan / Geysers / Trimmer / Hair Straightner / Hair Dryer / Water Purifier / Mixer Grinder / Gas Stove / Electric Kettle / Computer Mouse / Computer Keyboard / USB & HDMI Cables / Computer Antivirus
            </Text>
            <Text>
                <b>Mobiles Accessories: </b>Mobile Covers / Leather Mobile Covers / Printed Back Covers / Tempered Glass
            </Text>
            <br />
            <Text>
            Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform. Snapdeal's vision is to enable the shoppers of Bharat to experience the joy of living their aspirations through reliable, value-for-money shopping. With a personalized, multilingual interface and cutting edge technology, Snapdeal has simplified the shopping experience for its value-conscious buyers by showcasing the most relevant products- products that are a good functional fit with their needs and of a quality that lasts- thereby delivering true value to its customers. With its commitment to high service standards, Snapdeal suppliers operate under a well structured ecosystem that enables them to offer great quality products at affordable prices. With majority of the value-seeking, middle-income, price-conscious buyers coming from the non-metros, Snapdeal’s logistics networks powered by third party logistics cover more than 96% of India’s pin codes enabling order deliveries to more than 2500 towns and cities and expanding. Further, Snapdeal's mission is to become India’s value lifestyle omni-channel leader. We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat consumers wherever they are on their offline to online shopping journey. Snapdeal is part of the AceVector Group and one of India’s best-known e-commerce companies with an exclusive focus on the value segment.
            </Text>
        </Box>
    </Box>
  );
}

export default Footer;
