const ctl = require("../controller/adminCtl");
const express = require("express");
const route = express.Router();
const multer = require("multer");

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"uploads")
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now());
    }
})

const upload = multer({storage : Storage}).single("image");

route.get("/", ctl.loginpage);
route.get("/logout", ctl.logout);
route.post("/login", ctl.login);
route.get("/dashboard", ctl.dashboard);
route.get("/addAdmin",ctl.addAdmin);
route.get("/editData/:id",ctl.editData);
route.get("/viewAdmin", ctl.viewAdmin);
route.post("/addAdminData",upload,ctl.addAdminData);
route.get("/deleteData/:id",ctl.deleteData);
route.post("/updateData",upload,ctl.updateData);


module.exports = route;