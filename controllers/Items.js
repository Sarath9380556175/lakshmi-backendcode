const items=require('../models/Items');


exports.getItems=(req,res)=>{

    const requestBody=req.body;

    const ItemId=requestBody.ItemId;

    items.find({item_id:ItemId})
    .then(response=>res.status(200).json({message:'items fetched successfully', Items:response}))

    .catch(error=>res.status(500).json({err:error}))
}