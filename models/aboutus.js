const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const aboutus=new Schema({

    image:{
        type:String,
        required:true

    },
    developer_name:{
        type:String,
        required:true
    },

    developer_role:{
        type:String,
        required:true
    },

    contact_name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('aboutusdetail',aboutus)