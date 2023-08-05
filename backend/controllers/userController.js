const User=require('../models/userModel');
const generatetoken =require('../config/token');
const asyncHandler=require('express-async-handler');
const { use } = require('../routes/userRoutes');
const registerUser=asyncHandler(async (req,res)=>{
    console.log(req.body);
    const{name,email,pass,pic}=await req.body;
    if(!name || !email || !pass){
        res.status(400);
        throw  new Error("please enter all the fields");
    }
    const userexits=await User.findOne({email});
    if(userexits){
        res.status(400);
        throw  new Error("User already exists");
    }
    const user=await User.create({
        name,email,pass,pic
    });
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generatetoken(user._id)
        });
        
    }
    else{
        res.status(400);
        throw new error("Failed to create the user");
    }
});
const authUser=asyncHandler(async (req,res)=>{
    const {email,pass}=await req.body;
    const user=await User.findOne({email});

    if(user && (user.pass==pass)){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generatetoken(user._id)
        });
    }
    else{
        res.status(400);
        throw new error("INVALID EMAIL OR PASSWORD");
    }
});
module.exports={registerUser,authUser};
