const schema=require("../model/seoSchema");
const schema2=require("../model/seoSchemo");
const fs=require("fs");

module.exports.dashboard = (req,res)=>{
    if(req.cookies.admindata){
        res.render("dashboard");
    }
    else{
        res.redirect("/")
    }
}

module.exports.login=(req,res)=>{
    res.render("login")
}
module.exports.register=(req,res)=>{
    res.render("register")
}

module.exports.admindata=async(req,res)=>{
    await schema.create(req.body).then(()=>{
        res.redirect("/dashboard")
    })
}
module.exports.addData =(req, res) => {
    res.render("addData");
}

module.exports.addDatainfo =async(req, res) => {
    console.log(req.file);
    
    req.body.image = req.file.path
  console.log(req.body);

    await schema2.create(req.body).then(()=>{
          res.redirect("/addData");
    })
}
module.exports.viewinfo =async(req, res) => {
    await schema2.find({}).then(carouselItem => {
        res.render("viewinfo",{carouselItem})
    })
}
module.exports.deleteData = async(req, res) => {
    const singleData = await schema2.findById(req.params.id);
    console.log(singleData);
    
    fs.unlinkSync(singleData.image);
    await schema2.findByIdAndDelete(req.params.id).then(() => {
        res.redirect("/viewinfo");
    });
}

module.exports.editData = async(req, res) => {
    await schema2.findById(req.params.id).then(carouselItem => {
        res.render("editData", {carouselItem});
    });
}

module.exports.updateData = async(req, res) => {

    const singleData = await schema2.findById(req.body.id);
    let img;
    
    req.file ? img = req.file.path : req.body.image;
    req.file && fs.unlinkSync(singleData.image);
    req.body.image = img;

    await schema2.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect("/viewinfo");
    });
}
// module.exports.logindata=async(req,res)=>{
//     console.log(req.body);
    
//     await schema.findOne({}).then((data=>{
//         if(data.email==req.body.email && data.password==req.body.password){
//             res.cookie("admindata2",data)
//             res.redirect("/dashboard")
//         }
//         else{
//             res.redirect("/")
//         }

//     }))
// }
module.exports.logindata = async (req, res) => {
    console.log(req.body);

    await schema.findOne({ email: req.body.email }).then((data) => {
        if (!data) {
            console.log("User not found!");
            return res.redirect("/"); // Redirect if no user found
        }

        if (data.password == req.body.password) {
            res.cookie("admindata2", data);
            return res.redirect("/dashboard");
        } else {
            console.log("Incorrect password!");
            return res.redirect("/"); // Redirect if password is incorrect
        }
    }).catch((err) => {
        console.error("Database error:", err);
        res.redirect("/");
    });
};

module.exports.logout=(req,res)=>{
    res.clearCookie("admindata2")
    res.redirect("/")
}