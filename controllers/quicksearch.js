const quick=require('../models/quicksearch');


exports.quicksearches=(req,res)=>{

    
    
    quick.find()
    .then(response=>res.status(200).json({message:"quicksearch items fetched successfully", quicksearch:response}))
    .catch(err=>res.status(500).json({error:err}));
};