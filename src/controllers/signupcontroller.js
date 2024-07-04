const User = require("../models/usermodel");
const bcrypt=require('bcrypt');
const signup=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            res.status(403).json({
                message:"enter required field's email and password"
            })
        }
        const existinguser=await User.findOne({email});
        if(existinguser){
            res.status(400).json({
                message:"user already exists"
            })
        }
        const hashedpassword=await bcrypt.hash(password,10);
        const data=new User({
            email:email,
            password:hashedpassword,
        });
        const response=await data.save();
        res.status(200).json({
            message:"user created",
            response:response
        })

    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=signup;