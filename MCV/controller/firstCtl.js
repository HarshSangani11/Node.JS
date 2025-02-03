const schema = require("../model/firstSchema");

module.exports.firstPage = async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("index",{data})
    })
}