const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
  
username:{type:String},
email:{type:String,unique:true},
password:{type:String,required:true},
createdAt:{type:Date,default:Date.now().valueOf()},
updatedAt:{type:Date,default:Date.now().valueOf()}

})
module.exports=mongoose.model("User",userSchema);
