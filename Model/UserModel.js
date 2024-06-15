const mongoose=require("mongoose")

const schema=mongoose.Schema

const UserSchema=new schema({
    title:{
        type:String,
        required:true
    },
    Image:{
        type:Array,
        required:true
    },
    status:{
        type:String,
        default:1
    },
})

const UserModel=mongoose.model("User",UserSchema)
module.exports=UserModel