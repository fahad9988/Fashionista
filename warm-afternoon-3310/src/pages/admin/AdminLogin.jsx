import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Flex, Stack, Link, useColorModeValue, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminLogin = () => {
  const [id, idCheck] = useState("");
  const [password, passwordCheck] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  },[])

  const handlelogin = (e) => {
    e.preventDefault();
    if(validate()) {
      // console.log('proceed');
      fetch("https://snapdeal-json-server.onrender.com/users/"+id).then((res) => {
        return res.json();
      }).then((res) => {
        console.log(res)
        if(Object.keys(res).length===0){
          toast.error('Please Enter valid id');
        } else {
          if(res.password === password) {
              toast.success("Successfully Login");
              sessionStorage.setItem('id', id);
              navigate('/adminproducts');
          } else {
              toast.error('Please Enter valid credentials');
          }
        }
      }).catch((err) => {
        toast.error('Login Failed due to :' +err.message)
      })
    }
  } 

  const validate = () => {
    let result = true;
    if(id === "" || id === null) {
      result = false;
      toast.warning("Please Enter id");
    }
    if(password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  }

  return (
    <Container>
      <Box mt={"30px"}>
      <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Admin Login</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input type="email" value={id} onChange={e=>idCheck(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={e=>passwordCheck(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button
                bg={'#e40046'} type='submit' onClick={handlelogin}
                color={'white'}
                _hover={{
                  bg: 'red.300',
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </Box>


    


    </Container>
  )
}

export default AdminLogin;