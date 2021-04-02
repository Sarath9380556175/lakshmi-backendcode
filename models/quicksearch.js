const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const quicksearches=new Schema({
    name:{
        type:String,
        required:true
    },

    content:{
        type:String,
        required:true
    },

    minprice:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('quicksearch', quicksearches);