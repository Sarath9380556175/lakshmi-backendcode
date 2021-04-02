const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();

const routes=require('./routes/index');
const port=process.env.port||8080;
const host='localhost';

app.use(cors());

app.use(bodyparser.json());

app.use('/', routes);
mongoose.connect('mongodb+srv://BujalaSarathKumarReddy:12345abcd@cluster0.nud0w.mongodb.net/RamanaRestaurant?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true} , ()=>{
    app.listen(port,host,()=>{
        console.log(`Server is running at ${host} : ${port}`);
    }) 
})

