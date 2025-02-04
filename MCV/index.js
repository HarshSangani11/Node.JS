const express=require("express")
const port =2125
const path=require("path")
const db=require("./config/db")
const schema= require("./model/firstSchema")
const multer=require("multer")
const fs=require("fs")
const app=express()
// app.use("/public",express.static(path.join(__dirname,"public")));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.set("view engine","ejs")
app.use(express.urlencoded())


app.post("/addData",async(req,res)=>{
    req.body.image=req.file.path
    await schema.create(req.body)
    .then(()=>{res.redirect("/")})
})


app.get("/deleteData",async(req,res)=>{
    let singleData=await schema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
await schema.findByIdAndDelete(req.query.id).then(()=>{
    res.redirect("/")
})
})

app.get("/editData/:id",async(req,res)=>{
    let data=await schema.findById(req.params.id)
    res.render("edit",{data})
})
app.post("/updateData",async(req,res)=>{
    let singleData=await schema.findById(req.body.id)
    let img;
    req.file ? img = req.file.path :img = singleData.image;
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img
await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
    res.redirect("/")
})
})

app.use("/",require("./routes/route"))
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started an port:" + port)
})