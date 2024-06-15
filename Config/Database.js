const mongoose=require("mongoose")

const ConnectDb=async(req,res)=>{
    try{
        const data=await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDb Connected ${data.connection.host}`);
    }catch(error){
        console.log(`Mongodb Not Connected ${error}`);
    }
}
module.exports=ConnectDb