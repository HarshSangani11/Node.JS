const express=require("express")
const port =2125
const path=require("path")
const db=require("./config/db")
const schema= require("./model/firstSchema")
const multer=require("multer")
const fs=require("fs")
const app=express()

app.set("view engine","ejs")
app.use(express.urlencoded())
app.post("/addData",async(req,res)=>{
    await schema.create(req.body)
    .then(()=>{res.redirect("/")})
})

app.use("/",require("./routes/route"))
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started an port:" + port)
})