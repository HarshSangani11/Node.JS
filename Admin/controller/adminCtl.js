const schema = require("../model/firstSchema");
const fs = require("fs");
// const { Schema } = require("mongoose");


module.exports.dashboard = async (req, res) => {
    // res.render("dashboard")
    if (req.cookies.admindata) {
        res.render("dashboard");
    } else {
        res.redirect("/");
    }
};
module.exports.addAdmin =(req, res) => {
    res.render("addAdmin");
}
module.exports.loginpage=(req,res)=>{
    res.render("login")
}
module.exports.logout=(req,res)=>{
    res.clearCookie("admindata")
    res.redirect("/")
}
module.exports.login =async(req, res) => {
   await schema.findOne({}).then((data=>{
    if(data.Email==req.body.email && data.pass==req.body.password){
        res.cookie("admindata",data)
        res.redirect("/dashboard")
    }
    else{
        res.redirect("/")
    }
   }))
console.log(req.body);

}
module.exports.addAdminData =async(req, res) => {
    console.log(req.file);
    
    req.body.image = req.file.path
  console.log(req.body);

    await schema.create(req.body).then(()=>{
          res.redirect("/addAdmin");
    })
}
module.exports.viewAdmin =async(req, res) => {
    await schema.find({}).then(carouselItem => {
        res.render("viewAdmin",{carouselItem})
    })
}


module.exports.deleteData = async(req, res) => {
    const singleData = await schema.findById(req.params.id);
    console.log(singleData);
    
    fs.unlinkSync(singleData.image);
    await schema.findByIdAndDelete(req.params.id).then(() => {
        res.redirect("/viewAdmin");
    });
}

module.exports.editData = async(req, res) => {
    await schema.findById(req.params.id).then(carouselItem => {
        res.render("editData", {carouselItem});
    });
}

module.exports.updateData = async(req, res) => {

    const singleData = await schema.findById(req.body.id);
    let img;
    
    req.file ? img = req.file.path : req.body.image;
    req.file && fs.unlinkSync(singleData.image);
    req.body.image = img;

    await schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect("/viewAdmin");
    });
}