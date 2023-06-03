const  mongoose = require("mongoose");
const dotenv =require("dotenv");
const express = require("express");
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn')

const User = require('./models/userSchema');
const PORT = process.env.PORT; 

app.use(express.json());
app.use(require('./router/auth'));


//middleware

const middleware = (req,res,next)=>{
     next();
}



app.listen(5000,()=>{
  console.log("server runing at 5000");
})

