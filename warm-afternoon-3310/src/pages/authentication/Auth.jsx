import React from 'react';
import { Divider, HStack, Link, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { Box, Button, Avatar, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import "./auth.css";
import { useAuth0 } from "@auth0/auth0-react";

function Auth() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    
  
    return (
      <>
        <Box>
            <Box display={'flex'}>

          <HStack class="dropdown">
          {/* <Button className='dropbtn' bgColor='#e40046' rightIcon={<Avatar bgColor='#e40046' size='sm'/>} border='none'>Sign In</Button> */}
          {
            !isAuthenticated ? (<Button className='dropbtn' bgColor='#e40046' rightIcon={<Avatar bgColor='#e40046' size='sm'/>} border='none'>Sign In</Button>) : (<Button color='white' bgColor='#e40046' rightIcon={<Avatar bgColor='#e40046' size='sm' src={user.picture}/>}>{user.name}</Button>)
          }
          
            <Stack class="dropdown-content">
              <Link href="#">Your Account</Link>
              <Link href="#">Your Orders</Link>
              <Link href="#">Shortlist</Link>
              <Divider orientation='horizontal' />
              <Text align={'center'} color='black' marginTop={'20px'}>If you are a new user</Text>
              <Link align={'center'} fontWeight={'600'} color='black'>Register</Link>
              {
                !isAuthenticated ?(
                  <Button onClick={() => loginWithRedirect()} bg='#e40046' color={'white'} width={'100%'} marginTop={'20px'}>Login</Button> 
                ): (<Button onClick={() => logout({ returnTo: window.location.origin })} bg='#e40046' color={'white'} width={'100%'} marginTop={'20px'}>
                Logout
              </Button>)
              }
  
            </Stack>
          </HStack>
          {/* onClick={onOpen} */}
        </Box>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login/Sign Up On Fashionista</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={70} >
              <FormControl>
                <FormLabel>Please provide your Mobile Number or Email to Login/ Sign Up on Fashionista</FormLabel>
                <Input ref={initialRef} placeholder='Mobile Number/ Email' />
              </FormControl>
              <Button bgColor='#e40046' width='100%' marginTop={'20px'} color='white'>
                Continue
              </Button>
            </ModalBody>
              <Text align={'center'}>or Login Using</Text>
            <ModalFooter>
              
              {/* <Button onClick={onClose}>Cancel</Button> */}
              <Button width={'100%'} leftIcon={<FcGoogle />}>Google</Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
      </>
    )
  }


export default Auth;
