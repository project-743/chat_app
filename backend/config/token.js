const jwt =require('jsonwebtoken');
const generatetoken=(userId)=>{
    return jwt.sign({userId},"harshanand",{expiresIn:"30d"});

};
module.exports=generatetoken;