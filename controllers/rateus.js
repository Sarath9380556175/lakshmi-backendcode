const rateus=require('../models/rateus');

exports.rateus=(req,res)=>{
    const requestBody=req.body;
    const restaurant=requestBody.Restaurant;
    const foodquality=requestBody.FoodQuality;
    const feedback=requestBody.feedback;

  
    const rating=new rateus({Restaurant:restaurant,FoodQuality:foodquality,Feedback:feedback})
    rating.save()
    .then(response=>res.status(200).json({message:'Thankyou for your Feedback' ,rateus:response}))
    .catch(err=>res.status(500).json({error:err}))

};