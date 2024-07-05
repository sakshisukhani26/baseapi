const mongoose=require('mongoose');
const url=process.env.MONGODB_URL;
const connection=mongoose.connect('mongodb://localhost:27017/').then((value)=>{
    console.log("Db is Connected!!");
});

module.exports=connection;