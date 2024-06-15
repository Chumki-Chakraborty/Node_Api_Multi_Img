const multer=require("multer")
const path=require("path")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Upload")
    },
    filename:(req,file,cb)=>{
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})
const UploadImg=multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(
            file.mimetype=="image/png"||
            file.mimetype=="image/jpg"||
            file.mimetype=="image/jpeg"

        ){
            cb(null,true)
        }else{
            cb(null,false)
        }
    },limits:{
        fieldSize:1024*1024*2
    }
})
module.exports=UploadImg