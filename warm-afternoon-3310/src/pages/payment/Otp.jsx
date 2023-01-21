import { useState } from "react";
import { Center } from "@chakra-ui/react";

import { Box, PinInput, PinInputField, Button, Text} from "@chakra-ui/react";

import PaymentSuccess from "./PaymentSuccess";

function Otp(){
const[success,setSucces]=useState(false)
   const[varify,setVarify]=useState(false)
const handlClick=()=>{
setVarify(true)

setTimeout(() => {
    setVarify(false)
    setSucces(true)
}, 3000);

}

if(success){
    return <PaymentSuccess />
}

return(
    
        <Box    background={"linear-gradient(to right, #33ccff 0%, #ff99cc 100%)"} w='9xl' h='4xl'>
            <Center >
            <Box mt='400'>
            <Text  fontWeight={'black'} mr='6' mb='4' fontSize={'30'} color='black'>Please Enter OTP</Text>
            <PinInput  otp>
  <PinInputField   borderColor={'black'}/>
  <PinInputField ml='2' borderColor={'black'} />
  <PinInputField ml='2' borderColor={'black'}/>
  <PinInputField ml='2' borderColor={'black'}/>
  
</PinInput>
<Button colorScheme='pink' ml='3' isLoading={varify===true}
    loadingText='Varifying' onClick={handlClick}>Varify</Button></Box>
            </Center>
        </Box>
     
    )
}

export default Otp;