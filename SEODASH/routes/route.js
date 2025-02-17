const express=require("express")
const ctl=require("../controller/seoCtl");
const route=express.Router();
const multer = require("multer")

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"uploads")
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now());
    }
})

const upload = multer({storage : Storage}).single("image");


route.get("/",ctl.login);
route.get("/register",ctl.register);
route.get("/dashboard",ctl.dashboard);
route.post("/admindata",ctl.admindata);
route.post("/logindata",ctl.logindata);
route.get("/logout",ctl.logout);

route.get("/addData",ctl.addData);
route.get("/viewinfo",ctl.viewinfo);

route.post("/addDatainfo",upload,ctl.addDatainfo);
route.get("/deleteData/:id",ctl.deleteData);


route.get("/editData/:id",ctl.editData);
route.post("/updateData",upload,ctl.updateData);


module.exports = route;