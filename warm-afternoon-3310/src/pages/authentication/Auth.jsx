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
        <Box>
            <Box display={'flex'}>
          <Button onClick={onOpen} bgColor={'#e40046'}>
            Sign In
          </Button>
            <AvatarGroup marginLeft={'5px'}>
              <Avatar bg='#e40046' size='sm' />
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
            <ModalBody pb={86}>
              <FormControl>
                <FormLabel>Please provide your Mobile Number or Email to Login/ Sign Up on Fashionista</FormLabel>
                <Input ref={initialRef} placeholder='Mobile Number/ Email' />
              </FormControl>
              <Button colorScheme='blue' width='100%' marginTop={'20px'}>
                Login
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