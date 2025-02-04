const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
})
const firstSchema=mongoose.model("FirstDataBase",schema);
module.exports=firstSchema;