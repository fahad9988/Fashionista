import React from 'react'
import { Alert,AlertTitle,AlertDescription,Box,Button } from '@chakra-ui/react'
import { AlertIcon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function PaymentSuccess(){
    return(
        <Box mt='40'>
 <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Payment Succesful!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
  Thank you for Shopping with us, You will get Conformation Email. Happy Shopping !
  </AlertDescription>
  <Link to='/'>
  <Button colorScheme='pink' mt='5' w='40' isLoading={false} loadingText='Loading' _hover={{backgroundColor:'purple'}}>Go to Home</Button>
</Link>
</Alert>
    </Box>
    )
}
export default PaymentSuccess;