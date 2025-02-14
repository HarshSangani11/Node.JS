const express=require("express");
const port=2005;
const app=express();
const path=require("path");
const db=require("./config/db")
const cookieParser = require("cookie-parser");

app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/", require("./routes/route"));

app.listen(port,(err)=>{
    err ? console.log("Error : ",err) : console.log("Server is start on port:",port);
    
    
})