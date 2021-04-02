const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const restaurantFilter=new Schema({
    image:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    mealtype_id:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model('restaurant', restaurantFilter)