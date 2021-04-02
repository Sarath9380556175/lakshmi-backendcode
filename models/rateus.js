const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const rateus=new Schema({
    Restaurant:{
       type:String,
       required:true
   },

   FoodQuality:{
    type:String,
    required:true
},
Feedback:{
    type:String
    
}
})



module.exports=mongoose.model('userrating', rateus);