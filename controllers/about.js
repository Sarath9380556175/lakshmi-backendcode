const about=require('../models/about')

exports.getaboutus=(req,res)=>{
    about.find()
    .then(response=>res.status(200).json({message:'Aboutus details fetched successfully',about:response}))
    .catch(err=>res.status(500).json({error:err}))
    };
