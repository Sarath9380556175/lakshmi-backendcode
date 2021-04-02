const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const getitems=new Schema({

    name:{
        type:String,
        required:true
    },

    item_id:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('item', getitems)