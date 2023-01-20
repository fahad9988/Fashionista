import {  Box ,Button,Icon} from "@chakra-ui/react"
import {BsArrowRightCircle,BsArrowLeftCircle} from "react-icons/bs";
import styled from"./Carousel2.module.css"
import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,Tag,HStack } from '@chakra-ui/react'
import {StarIcon } from '@chakra-ui/icons'


let data1=[
   
  {
    "id": 245,
    "category": "Child",
    "title": "Superminis",
    "subtitle": "Pack of 6 Cotton Pyjamas",
    "discounted_price": "884",
    "price": 884,
    "strike_price": "1499",
    "discount": "(41% OFF)",
    "images": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15283758/2021/8/27/920404fc-ab6c-48cb-8c11-a5cd6bcce0d01630064142320Pyjamas1.jpg",
    "size": [
      "0-6M",
      "6-9M",
      "9-12M",
      "12-18M"
    ],
    "rating": "4.4",
    "quantity": 1,
    "rating_count": "278",
    "myStyle": "any"
  },{
    "id": 1,
    "category": "Mens",
    "title": "HRX by Hrithik Roshan",
    "subtitle": "Men Rapid Dry Running Joggers",
    "discounted_price": "664",
    "price": 664,
    "strike_price": "1899",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
    ],
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": "3.7",
    "rating_count": "13.8k",
    "quantity": 1,
    "myStyle": "Joggers"
  },
  {
    "id": 109,
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Yoke Design Kurta Set",
    "discounted_price": "887",
    "price": 887,
    "strike_price": "3699",
    "discount": "(76% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg"
    ],
    "size": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": "4.1",
    "rating_count": "1.9k",
    "quantity": 1,
    "myStyle": "Kurta"
  },{
    "id": 246,
    "category": "Child",
    "title": "YK Disney",
    "subtitle": "Boys Pack of 3 Printed T-shirt",
    "discounted_price": "620",
    "price": 620,
    "strike_price": "2299",
    "discount": "(73% OFF)",
    "images": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18945468/2022/7/2/741645ef-724f-4fb4-b210-1049a2f0b6391656748413427Tshirts1.jpg",
    "size": [
      "7-8Y",
      "8-9Y",
      "9-10Y",
      "11-12Y",
      "13-14Y",
      "15-16Y"
    ],
    "rating": "4.5",
    "quantity": 1,
    "rating_count": "44",
    "myStyle": "T-shirt"
  },,
  {
    "id": 119,
    "category": "Womens",
    "title": "Ahalyaa",
    "subtitle": "Women Printed Kurta with Palazzos With Dupatta",
    "discounted_price": "1560",
    "price": 1560,
    "strike_price": "6000",
    "discount": "(74% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg"
    ],
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": "3.6",
    "rating_count": "2.4k",
    "quantity": 1,
    "myStyle": "Kurta"
  },
  {
    "id": 244,
    "category": "Child",
    "title": "HELLCAT",
    "subtitle": "Boys Pack of 3 T-shirts",
    "discounted_price": "389",
    "price": 389,
    "strike_price": "2997",
    "discount": "(87% OFF)",
    "images": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18265286/2022/5/13/bb9bbe1a-f722-4122-968f-335627584f891652445273934HELLCATBoysNavyBlueTypography3PrintedBioFinishAppliqueT-shir1.jpg",
    "size": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y",
      "11-12Y"
    ],
    "rating": "4",
    "quantity": 1,
    "rating_count": "309",
    "myStyle": "T-shirt"
  },
  ,
  {
    "id": 38,
    "category": "Mens",
    "title": "HERE&NOW",
    "subtitle": "Men Cotton Casual Shirt",
    "discounted_price": "799",
    "price": 799,
    "strike_price": "1999",
    "discount": "(Rs. 1200 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg"
    ],
    "size": [
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "rating": "4.3",
    "rating_count": "13.5k",
    "quantity": "1",
    "myStyle": "Casual Shirt"
  },
  {
    "id": 116,
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Yoke Design Kurta with Trousers & Dupatta",
    "discounted_price": "979",
    "price": 979,
    "strike_price": "2799",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg"
    ],
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "3XL",
      "4XL"
    ],
    "rating": "4.3",
    "rating_count": "7.7k",
    "quantity": 1,
    "myStyle": "Kurta"
  },{
    "id": 121,
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Printed Kurta with Palazzos",
    "discounted_price": "879",
    "price": 879,
    "strike_price": "2199",
    "discount": "(60% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg"
    ],
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "3XL",
      "4XL"
    ],
    "rating": "4.3",
    "rating_count": "8k",
    "quantity": 1,
    "myStyle": "Kurta"
  },
  {
    "id": 87,
    "category": "Mens",
    "title": "Moda Rapido",
    "subtitle": "Printed Cotton Pure Cotton T-shirt",
    "discounted_price": "399",
    "price": 399,
    "strike_price": "799",
    "discount": "(60% OFF)",
    "images": 
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
    "size": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": "3.7",
    "rating_count": "23.8k",
    "quantity": "1",
    "myStyle": "any"
  }, {
    "id": 198,
    "category": "Womens",
    "title": "Roadster",
    "subtitle": "Polo Collar T-shirt",
    "discounted_price": "349",
    "price": 349,
    "strike_price": "999",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg"
    ],
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": "4.2",
    "quantity": 1,
    "rating_count": "4k",
    "myStyle": "any"
  },
  
]
export const TrendingSlider=()=>{
    const btnpressprev=()=>{
      let boxel=document.querySelector(`.${styled.product_container}`);
      boxel.scrollLeft-=270
      console.log("hek")
      console.log(boxel.scrollLeft)
    }
    const btnpressnext=()=>{
      let boxel=document.querySelector(`.${styled.product_container}`);
      boxel.scrollLeft+=270
      console.log(boxel.scrollLeft)
  
    }
      return(
          <Box className={styled.carousel}>
             <Text>TRENDING PAGES</Text>
              <Box className={styled.product_container} id="productsss" >
                  {data1.map(el=><Cards strike_price={el.strike_price} image={el.images} key={Date.now()+el.id} title={el.title} discounted_price={el.discounted_price} rating={el.rating}discount={el.discount}></Cards>)}
              </Box>
            <Box display={"flex"} justifyContent="center">
              <Button  onClick={btnpressprev} zIndex="2"><Icon as={BsArrowLeftCircle}/></Button>
              <Button onClick={btnpressnext} zIndex="2"><Icon as={BsArrowRightCircle}/></Button>   
            </Box>
          </Box>
      )
  }
  
  const Cards=({image,
    strike_price,
    rating,discount,title,subtitle,discounted_price
    })=>{


  return <Card className={styled.card} minWidth="230px"
  minHeight="230px">

  <Image
   m="auto"
   src={image}
   width="200px"
   height="230px"
   alt="image"
 />
 <Text color="#748A9C" fontSize="14px" mt={2}>{subtitle}</Text>
 <Text color="#748A9C" fontSize="14px" >{title}</Text>
 <HStack display="flex" h="30px"  alignItems="center" >
 <Text fontSize="14px" color="#D6D0DB" textDecoration="line-through">
     Rs. {strike_price}
   </Text>
 <b fontSize="14px">Rs. {discounted_price}</b>
  
   <Tag colorScheme="gray">{discount}</Tag>
 </HStack>
 
 <Box display="flex"  alignItems="center">
   {Array(5)
     .fill("")
     .map((_, i) => (
       <StarIcon
         boxSize={3}
         key={i}
         color={
           i < Math.floor(rating) ? "yellow.400" : "gray.300"
         }
       />
     ))}
   <Box as="span"  ml="2" color="#D6D0DB" fontSize="sm">
     ({rating})
   </Box>
 </Box>
 </Card>
  }