const express=require("express");
const port=2125;
const app=express();
const path=require("path")

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/book",(req,res)=>{
    res.render("book")
})
app.get("/menu",(req,res)=>{
    res.render("menu")
})
app.use("/public",express.static(path.join(__dirname,"public")))
app.listen(port,(err)=>{
    err?console.log(err):console.log("server started on port:"+port);
})