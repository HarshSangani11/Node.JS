const mongoose=require("mongoose");
const schema2=mongoose.Schema({
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
const seoSchema2=mongoose.model("SEO2",schema2);
module.exports=seoSchema2;