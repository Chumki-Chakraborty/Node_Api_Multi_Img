const express=require("express")
const app=express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dotenv=require("dotenv")
dotenv.config()
const MongodbConnection=require("./Config/Database")
MongodbConnection()
// -------------MultipleImages---------//
app.use("/Upload",express.static("Upload"))
// ***************ApiRouter****************//
const ApiRouter=require("./Route/ApiRoute")
app.use(ApiRouter)

const port=3232
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`);
})