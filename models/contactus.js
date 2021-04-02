const mongoose=require('mongoose');


const Schema=mongoose.Schema;

const Contactus=new Schema({
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    comment:{
        type:String,
        required:true
    },
})


module.exports=mongoose.model('contact', Contactus);