const express=require("express")
const ApiController = require("../Controller/ApiController")
const upload=require("../Utilits/ImgUpload")
const ApiRouter=express.Router()

ApiRouter.post("/add/user",upload.array("Image",2),ApiController.AddUser)
ApiRouter.get("/get/data",ApiController.AllData)
ApiRouter.get("/edit/user/:id",ApiController.EditUser)
ApiRouter.post("/update/user/:id",upload.array("Image",2),ApiController.UpdateUser)
ApiRouter.get("/delete/user/:id",ApiController.DeleteUser)

module.exports=ApiRouter