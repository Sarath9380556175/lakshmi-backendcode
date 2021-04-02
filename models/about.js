const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const aboutuscontent=new Schema({
    aboutus:{
        type:String,
        required:true
    }

    
})

module.exports=mongoose.model('aboutuscontent',aboutuscontent)