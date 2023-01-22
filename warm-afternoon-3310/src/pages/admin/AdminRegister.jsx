import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Container,
  Button,
  Heading, HStack, InputGroup, InputRightElement, Flex, useColorModeValue, Stack, Text, Link
} from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { v4 as uuidv4 } from "uuid";

const AdminRegister = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const IsValidate = () => {
    let isProceed = true;
    let errormessage = 'Please enter all the required feilds';
    if(username === null || username === '') {
      isProceed = false;
      errormessage;
    }
    if(name === null || name === '') {
      isProceed = false;
      errormessage;
    }
    if(email === null || email === '') {
      isProceed = false;
      errormessage;
    }
    if(mobile === null || mobile === '') {
      isProceed = false;
      errormessage;
    }
    if(password === null || password === '') {
      isProceed = false;
      errormessage;
    }
    if(!isProceed) {
      toast.warning(errormessage);
    } else {
      if(/^[a-zA-Z0-0]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

      } else{
          isProceed = false;
          toast.warning("Please enter the valid email");
      }
    }
    return isProceed;
  }


  const handlesubmit = (e) => {
    e.preventDefault();
    // let id = uuidv4();
    const userObj = { username, name, email, mobile, password };
    console.log(userObj);

    if(IsValidate()){
    fetch("https://snapdeal-json-server.onrender.com/users",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(userObj)
    }).then((res) => {
      toast.success("Registered Successfully");
      navigate("/adminlogin")
    }).catch((err) => {
      toast.error("Failed : " +err.message);
    });
  };

  
}


  return (
    <Container>
    <Box mt={'35px'}>
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Admin Registration
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            
            <HStack>
                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" value={username} onChange={e=>setUsername(e.target.value)} />
                </FormControl>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" value={name} onChange={e=>setName(e.target.value)} />
                </FormControl>
            </HStack>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input type="text" value={mobile} onChange={e=>setMobile(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={e=>setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting" type='submit' onClick={handlesubmit}
                size="lg"
                bg={'#e40046'}
                color={'white'}
                _hover={{
                  bg: 'red.300',
                }}>
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} href='/adminlogin'>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </Box>

    </Container>
  )
}

export default AdminRegister;