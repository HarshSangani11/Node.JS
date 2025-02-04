const express = require("express")
const route = express.Router()
    
const multer=require("multer")
const Storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-" +Date.now())
    }

})
const ctl = require("../controller/firstCtl")
const upload=multer({storage:Storage}).single("image")

route.get("/",upload,ctl.firstPage)

module.exports = route;