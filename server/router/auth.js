const jwt = require("jsonwebtoken");

const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");

require('../db/conn');
const User = require("../models/userSchema");
router.get("/" , (req, res)=>{
    res.send("hello HOME");
})

router.post("/register" , async (req, res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error :"plz filled the data"})
    }
   
    try{
       const userExist= await User.findOne({email : email})
        
            if(userExist){
             return res.status(422).json({error: "email already exits!! "})
            }else if(password!=cpassword){
                return res.status(422).json({error:"password are not matching"});
            }else{
    
            const user = new User({name,email,phone,work,password,cpassword});
            
            //after calling before saving
            await user.save();
                res.status(201).json({message:"user registered sucessfully"});
            }
            
    }catch(err){
        console.log(err);
    }
    
})  ;

   router.post("/signup", async(req,res)=>{
      try{
        let token;
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({error:"Plz filled the data"});
        }

        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires:new Date(Date.now() + 345667890000),
                httpOnly:true
            });
        if(!isMatch){
            res.status(400).json({error:"Invalid credentials"});
        }
        else{
            res.status(200).json({message:"user signup successfully"});
        }
        }else{
             res.status(400).json({error:"Invalid credentials"});
        }

      }catch(err){
        console.log(err);
    }
  
});

module.exports=router;

