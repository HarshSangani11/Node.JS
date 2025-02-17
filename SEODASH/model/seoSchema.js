const mongoose=require("mongoose")
const schema=mongoose.Schema({
    uname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:Number,
        required:true,
    },
})

const seoSchema=mongoose.model("SEO",schema);
module.exports=seoSchema;