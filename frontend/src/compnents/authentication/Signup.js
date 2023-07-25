import { VStack,FormControl,Input,FormLabel,InputRightElement,Button, InputGroup} from '@chakra-ui/react'
import React, { useState } from 'react'

function  Signup (){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmpassword,setConfirmpassword]=useState();
    const [show,setshow]=useState(false);
    const handleClick=()=>{setshow(!show)};
    const postDetails=(pics)=>{};
    const submitHandler=()=>{};
  return (
    <VStack spacing="5px">
        <FormControl id="first_name" isRequired >
            <FormLabel>Email address</FormLabel>
            <Input type='text' placeholder="Enter Your Name" onChange={(e)=>{
                    setName(e.target.value)
            }}/>
        </FormControl>
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
        <FormControl id="profile_pic" isRequired >
            <FormLabel>Profile Photo</FormLabel>
            <Input pt="4px" type='file' accept='image/*' onChange={(e)=>{
                    postDetails(e.target.files[0]);
            }}/>
        </FormControl>
        <Button w="100%" mt="5px" colorScheme='blue' onClick={submitHandler}>Sign Up</Button>
    </VStack>
  );
}

export default Signup