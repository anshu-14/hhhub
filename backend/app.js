const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const port=process.env.port || 5000;
const authRoute=require('./routes/auth-route');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/househelperhub',(err)=>{
  if(err){
    console.log("not connected");
  }
  else{
    console.log("data connected successfully");
  }
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/auth',authRoute);
app.get('/',(req,res)=>{
  res.send("Hello World");
})
app.listen(port,()=>{
  console.log(`server is running on ${port}`);
});
