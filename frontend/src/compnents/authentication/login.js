
import { VStack,FormControl,Input,FormLabel,InputRightElement,Button, InputGroup} from '@chakra-ui/react'
import React, { useState } from 'react'
const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [show,setshow]=useState(false);
  const handleClick=()=>{setshow(!show)};
  const submitHandler=()=>{};
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