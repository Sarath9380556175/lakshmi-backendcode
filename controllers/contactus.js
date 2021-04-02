const contactus=require('../models/contactus');


exports.contactus=(req,res)=>{
    const requestBody=req.body;

    const firstname=requestBody.firstname;
    const lastname=requestBody.lastname;
    const password=requestBody.password;
    const email=requestBody.email;
    const comment=requestBody.comment;

    const contact=new contactus({firstname:firstname,lastname:lastname,password:password,email:email,comment:comment})
    contact.save()
    .then(response=>res.status(200).json({message:'details saved successfully',contactus:response}))

    .catch(err=>res.status(500).json({error:err}))


}