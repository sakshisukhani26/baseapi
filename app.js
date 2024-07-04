const express=require('express');
const routes = require('./src/routes/userroutes');
const allroutes=express.Router();
allroutes.use('/base',routes);

module.exports=allroutes;