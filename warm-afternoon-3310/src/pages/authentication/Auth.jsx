import React from 'react';
import { Container, Text, useDisclosure } from '@chakra-ui/react'
import { Box, Button, AvatarGroup, Avatar, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

function Auth() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Box 
          border={'1px solid'}
          >
            <Box display={'flex'}>
          <Button onClick={onOpen}>
            Sign In
          </Button>
            <AvatarGroup marginLeft={'1rem'}>
              <Avatar name='user' bg='red.500' src='https://bit.ly/ryan-florence' />
            </AvatarGroup>
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
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Please provide your Mobile Number or Email to Login/ Sign Up on Fashionista</FormLabel>
                <Input ref={initialRef} placeholder='Mobile Number/ Email' />
              </FormControl>
              <Button colorScheme='blue' width='100%' marginTop={'20px'}>
                Save
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