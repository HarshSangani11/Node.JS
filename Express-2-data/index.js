const express=require("express")
const port=1010
const app=express()
const path = require("path");


app.set("view engine","ejs")
app.use(express.urlencoded());
app.use("/public",express.static(path.join(__dirname,"public")));

let project=[
    {
        "id":1,name:"asd"
    }
];
app.get("/",(req,res)=>{
    res.render("index",{project});
})

const middle=(req,res,next)=>{
    console.log(req.body);
    console.log("Hello");
    next();
}

app.listen(port,(err)=>{
    err ? console.log(err) :  console.log("Server is Start");
})

app.post("/addData",middle,(req,res)=>{
    req.body.id=project.length+1;
    project.push(req.body);
    res.redirect("/");
})

app.get("/deleteData",(req,res)=>{
    let projectData=project.filter((item)=>item.id!=req.query.id);
    project=projectData;
    res.redirect("/");
})

app.get("/editData/:id",(req,res)=>{
    let data=project.find((item)=>item.id == req.params.id);
    res.render("edit",{data});
})
app.post("/updateData",(req,res)=>{
    project.forEach((item)=>{
        if(item.id==req.body.id){
            item.name=req.body.name;
        }
        else{
            item
        }
    })
    res.redirect("/");
})