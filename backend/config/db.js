const { urlencoded } = require('express');
const mongoose=require('mongoose');
const connect=async ()=>{
    try{
        password=encodeURIComponent("webproject743@2002");
        const conn= await mongoose.connect('mongodb+srv://webproject743:'+password+'@cluster0.mrir2cx.mongodb.net/?retryWrites=true&w=majority'
        ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`mongo db connect ${conn.connection.host}`);
    }
    catch(error){
        console.log(`error occured ${error.message}`);
        process.exit();

    }
};
module.exports=connect;