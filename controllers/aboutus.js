const aboutus=require('../models/aboutus');

exports.getaboutusdetails=(req,res)=>{
aboutus.find()
.then(response=>res.status(200).json({message:'Aboutus details fetched successfully',aboutus:response}))
.catch(err=>res.status(500).json({error:err}))
};