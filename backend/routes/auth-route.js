const router =require('express').Router();
const User = require('../models/user');
router.post('/signup',(req,res)=>{
  const user=new User({
    // displayName:{type:string},
    username:req.body.displayName,
    email: req.body.email,
    password: req.body.password
   
    })
  user.save().then((_)=>{
  res.json({success:true,messaage:"Account has been created"});
})
.catch((err)=> {
  res.json({success:false,messaage:"Failed"});
});
router.post('/login',(req,res)=>{
  res.json("login work");
});

})


module.exports=router;

