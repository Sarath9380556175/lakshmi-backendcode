const restaurant=require('../models/restaurant')

exports.getRestaurants=(req,res)=>{
    const requestBody=req.body;

    const mealtype=requestBody.mealtype;
   
   let  payload={};

    if(mealtype)
    {
        payload={
            mealtype_id:mealtype
        }
    }

    restaurant.find(payload)

    .then(response=>res.status(200).json({message:'restaurant filtered successfully', filter:response}))

    .catch(error=>res.status(500).json({err:error}))

}