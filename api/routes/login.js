const express = require('express');
const session = require('express-session');
const router = express.Router();
const url = require('url');

const Login= require("../models/login");

router.get('/',(req,res)=>{
    req.session.userName="swrrrr";
    res.send("settting")
});

router.get('/ses',(req,res)=>{
    var username=url.parse(req.url,true).query;
    console.log(username.user);
    req.session.userName=username.user;
   console.log( req.session.userName);
   res.json({
       name:req.session.userName,
   })//this.route.navigate(['/page']);
   });
module.exports=router;