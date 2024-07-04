const mongoose=require('mongoose');
const connection=mongoose.connect('').then((value)=>{
    console.log("Db is Connected!!");
});

module.exports=connection;