const mongoose=require("mongoose");
const schema=mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    pass:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    hobby:{
        type:Array,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },

    
})
const firstSchema=mongoose.model("metrix",schema);
module.exports=firstSchema;