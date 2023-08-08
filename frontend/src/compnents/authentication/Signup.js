import { VStack,FormControl,Input,FormLabel,InputRightElement,Button, InputGroup} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

function  Signup (){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPassword]=useState();
    const [confirmpassword,setConfirmpassword]=useState();
    const [show,setshow]=useState(false);
    const handleClick=()=>{setshow(!show)};
    const toast = useToast();
    const [pic,setPic]=useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    // const postDetails=(pics)=>{
    //     console.log(pics);
    //     let api_key=199671844571712;
    //     if(pics==undefined){
    //         toast({
    //             title: 'please select an image',
    //             status: 'warning',
    //             duration: 5000,
    //             isClosable: true,
    //             position:"bottom"
    //           })
    //           return ;
    //     }
    //     if(pics.type=="image/jpeg" || pics.type=="image/png"){
    //         let data =new FormData();
    //         data.append("file",pics);
    //         data.append("upload_preset","chat_app");
    //         data.append("cloud_name","drtyhoyti");
    //         fetch("https://api.cloudinary.com/v1_1/drtyhoyti/image/upload",{
    //             method:"post",
    //             body:data
    //         }).then((res)=>{
    //             res.json();
    //         }).then(
    //             (data)=>{
    //                 console.log(data);
    //                 // setPic(data.url.toString());
    //                 // console.log(data.url.toString());
    //                 setloading(false);
    //             }
    //         ).catch((err)=>{
    //             console.log(err);
    //             setloading(false);
    //         })
    //     }
    //     else{
           
    //             toast({
    //                 title: 'please select an image',
    //                 status: 'warning',
    //                 duration: 5000,
    //                 isClosable: true,
    //                 position:"bottom"
    //               })
    //               return ;
        
    //     }
    // };
    const submitHandler=async ()=>{
       if(!name || !email || !pass ){
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
            const {data}= await axios.post("/api/user",{name,email,pass,pic},config);
            console.log(data);
            localStorage.setItem('userInfo',JSON.stringify(data));
       }catch{
            console.error();
            toast({
                title: 'Registration unsucessfull',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position:"bottom"
            })
          return ;
       }
       toast({
        title: 'Registration sucessfull',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position:"bottom"
    })
        
       
    };
  return (
    <VStack spacing="5px">
        <FormControl id="First_name" isRequired >
            <FormLabel>first_name</FormLabel>
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
        {/* <FormControl id="profile_pic" isRequired >
            <FormLabel>Profile Photo</FormLabel>
            <Input pt="4px" type='file' accept='image/*' onChange={(e)=>{
                    postDetails(e.target.files[0]);
            }}/>
        </FormControl> */}
        <Button w="100%" mt="5px" colorScheme='blue' onClick={submitHandler} >Sign Up</Button>
    </VStack>
  );
}

export default Signup