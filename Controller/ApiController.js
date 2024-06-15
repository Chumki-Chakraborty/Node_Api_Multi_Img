const UserModel = require("../Model/UserModel")
const path=require("path")
const fs=require("fs")
class ApiController{

    AddUser = async (req, res) => {
        try{
            const {title}=req.body
            const AddImg=req.files.map((file)=>file.path)

            const adduser=new UserModel({
                title,Image:AddImg
            })
            
            const response=await adduser.save()
            if(response){
                return res.status(201).json({
                    message:"Data is added",
                    data:response
                })
                
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // -----------------AllData---------------------//
    AllData=async(req,res)=>{
        try{
            const getdata=await UserModel.find()
            if(getdata){
                return res.status(201).json({
                    message:"All data get done..",
                    Data:getdata
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // -----------------EditUser-----------------//
    EditUser=async(req,res)=>{
        try{
            const id=req.params.id
            const editdata=await UserModel.findById(id)
            if(editdata){
                return res.status(201).json({
                    message:"Edit data get..",
                    edit:editdata
                })
            }

        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // --------------------UpdateUser----------------------//
    UpdateUser=async(req,res)=>{
        try{
            const {title}=req.body
            const id=req.params.id
            const AddImg=req.files.map((file)=>file.path)
            const DuplicateImg=await UserModel.findById(id)
            if(DuplicateImg){
                DuplicateImg.Image.forEach((img)=>{
                    fs.unlinkSync(img)
                })
            }
            const updatedata=await UserModel.findByIdAndUpdate(id,{
                title,Image:AddImg
            },{new:true})
            if(updatedata){
                return res.status(201).json({
                    message:"Data has been updated",
                    Data:updatedata
                })
            }

        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
    // -----------------DeleteUser-----------------//
    DeleteUser=async(req,res)=>{
        try{
            const id=req.params.id
            const DeleteData=await UserModel.findByIdAndDelete(id)

            
            DeleteData.Image.forEach((Img)=>{
                fs.unlinkSync(Img)
            })

            if(DeleteData){
                return res.status(201).json({
                    message:"Data has been deleted..",
                    Data:DeleteData,
                   
                })
            }
        }catch(error){
            return res.status(500).json({
                error:error.message
            })
        }
    }
}
module.exports=new ApiController()