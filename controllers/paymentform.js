const payment=require('../models/paymentform')


exports.paymentform=(req,res)=>{
    const request=req.body;

    const name=request.name;
    const email=request.email;
    const password=request.password;
    const mobilenumber=request.mobilenumber;
    const gender=request.gender;

   
    const payments=new payment({name:name, email:email, password:password, mobilenumber:mobilenumber,gender:gender});
    payments.save()
    .then(response=>{
        res.status(200).json({message:"user registerd successfully",payments:response})})
    .catch(err=>{
        res.status(500).json({error:err})})
};