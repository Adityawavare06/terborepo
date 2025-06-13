import express from "express";
import { Middleware } from "./middleware";
 
const app = express()
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


    app.post("/signup" , (req,res)=>{
  // db call 
   res.json({
     userId: "12324"
   })
         

})

app.post("/signin" , (req,res)=>{

       const userId =1 ;
      
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

 res.json({
    token
 })

})

app.post("/room" ,  Middleware, (req,res)=>{
 

     //db call
     res.json({
        roomId :" 1344"
     })

})

app.listen(3000)