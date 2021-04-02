const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const getlocations=new Schema({
    location_id:{
        type:Number,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    city_id:{
        type:Number,
        required:true
    },
})

module.exports=mongoose.model('location', getlocations);