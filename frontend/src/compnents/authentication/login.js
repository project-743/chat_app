
import { VStack,FormControl,Input,FormLabel,InputRightElement,Button, InputGroup} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const Login = () => {
  const [email,setEmail]=useState();
  const [pass,setPassword]=useState();
  const [show,setshow]=useState(false);
  const handleClick=()=>{setshow(!show)};
  const toast=useToast();
  const submitHandler=async ()=>{
    if(!email || !pass ){
                toast({
                    title: 'please enter all the details',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                    position:"bottom"
                  })
                  return ;
       }
       try{
            const config={
                headers:{"content-type":"application/json"}
            };
            const {data}= await axios.post("/api/user/login",{email,pass},config);
            console.log(data);
            localStorage.setItem('userInfo',JSON.stringify(data));
       }catch{
            console.error();
            toast({
                title: 'signed up unsuccessfull',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position:"bottom"
            })
          return ;
       }
       toast({
        title: 'sucessfull',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position:"bottom"
    })
  };
  return (
    <VStack spacing="5px">
    <FormControl id="email" isRequired >
        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder="Enter Your Email" onChange={(e)=>{
                setEmail(e.target.value)
        }}/>
    </FormControl>
    <FormControl id="password" isRequired >
        <FormLabel>Password</FormLabel>
        <InputGroup >
            <Input type={show?"text":"password" } placeholder="Enter Your Password" onChange={(e)=>{
                    setPassword(e.target.value)
            }}/>
            <InputRightElement>
            <Button mr="5px" bgColor={"white"} size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
            </Button>
            </InputRightElement>
        </InputGroup>
    </FormControl>
    <Button w="100%" mt="5px" colorScheme='blue' onClick={submitHandler}>Login in </Button>
</VStack>
  );
}

export default Login;