const mongoose=require("mongoose");
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Aname:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    scopy:{
        type:Number,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now, // Automatically set the current date as the default value
      },
    img:{
        type:String,
        required:true,
    },

    
})
const bookschema=mongoose.model("bookschema",schema);
module.exports=bookschema;