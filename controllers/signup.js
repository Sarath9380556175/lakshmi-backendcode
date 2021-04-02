const signup=require('../models/signup')
const nodemailer=require('nodemailer')
exports.signup=(req,res)=>{
    const request=req.body;

    const name=request.name;
    const email=request.email;
    const password=request.password;
    const mobilenumber=request.mobilenumber;
    const gender=request.gender;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sarathbunny75',
          pass: '12345abcd'
        }
      });
      
      var mailOptions = {
        from: 'sarathbunny75@gmail.com',
        to: email,
        subject: `${email} successfully created account in our application`,
        html: '<p>Thankyou</p>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    const users=new signup({name:name, email:email, password:password, mobilenumber:mobilenumber,gender:gender});
    users.save()
    .then(response=>{
        res.status(200).json({message:"user registerd successfully", signup:response})})
    .catch(err=>{
        res.status(500).json({error:err})})
};

exports.login=(req,res)=>{
    const requestBody=req.body;

    const email=requestBody.email;
    const password=requestBody.password;
    const gender=requestBody.gender;


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sarathbunny75',
          pass: '12345abcd'
        }
      });
      
      var mailOptions = {
        from: 'sarathbunny75@gmail.com',
        to: email,
        subject: `${email} successfully LoggedIn to our application`,
        html: '<p>Thankyou</p>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


    signup.find({email:email, password:password,gender:gender})
    .then(response=>{
        if(response.length!=0)
        {
            res.status(200).json({message:"user loggedin successfully", login:response, isLoggedin:true})
        }
        else{
            res.status(200).json({message:"user does not exist", login:response, isLoggedin:false })
        }
    })
    .catch(err=>res.status(500).json({error:err}))

}