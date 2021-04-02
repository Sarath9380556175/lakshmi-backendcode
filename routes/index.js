const express=require('express');

const router=express.Router();
const signupcontroller=require('../controllers/signup')
const quicksearchcontroller=require('../controllers/quicksearch')
const locationcontroller=require('../controllers/locations')
const rateuscontroller=require('../controllers/rateus')

const contactuscontroller=require('../controllers/contactus')

const restaurantcontroller=require('../controllers/restaurant')

const itemcontroller=require('../controllers/Items')

const paymentcontroller=require('../controllers/payments')

const aboutusdetailscontroller=require('../controllers/aboutus')

const aboutuscontroller=require('../controllers/about')

const paymentscontroller=require('../controllers/paymentform')

router.get('/quicksearches', quicksearchcontroller.quicksearches)

router.post('/signup', signupcontroller.signup);

router.post('/login', signupcontroller.login);


router.get('/locations', locationcontroller.getlocations);


router.post('/rateus', rateuscontroller.rateus)

router.post('/contactus' , contactuscontroller.contactus)

router.post('/restaurantsfilter', restaurantcontroller.getRestaurants)

router.post('/itemslist', itemcontroller.getItems)

router.post('/payment', paymentcontroller.payments);


router.post('/callback', paymentcontroller.callback);

router.get('/aboutusdetails', aboutusdetailscontroller.getaboutusdetails)

router.get('/aboutus', aboutuscontroller.getaboutus)


router.post('/paymentform', paymentscontroller.paymentform);




module.exports=router;