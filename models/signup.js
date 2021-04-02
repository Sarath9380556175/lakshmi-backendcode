const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const signupfrom=new Schema({
    name:{
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
    mobilenumber:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('signup',signupfrom);