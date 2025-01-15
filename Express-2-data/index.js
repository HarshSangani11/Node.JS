const express = require("express");
const port = 2339

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded());

let students = [
    { id: 1, name: "Harsh", city: "Rajkot" },
];
app.get("/", (req, res) => {
    res.render("index", { students });
})
app.post("/addData", (req, res) => {
    req.body.id = students.length + 1;
    students.push(req.body);
    res.redirect("/")
})
app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on port:" + port);
})
app.get("/deleteData",(req,res)=>{
    let studentData=students.filter((item)=>item.id !=req.query.id);
    students=studentData;
    res.redirect("/");
})
