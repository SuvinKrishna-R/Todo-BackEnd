const mongoose=require('mongoose')



const userSchema=new mongoose.Schema({

    uname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    psw:{
        type:String,
        required:true
    }
})
const users=new mongoose.model("users",userSchema)
module.exports=users