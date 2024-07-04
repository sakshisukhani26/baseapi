const express=require('express');
const signup = require('../controllers/signupcontroller');
const routes=express.Router();

routes.post('/signup',signup);

module.exports=routes;