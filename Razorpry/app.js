const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('./dbs/config');

mongoose.connect(db.mongoURI,{useNewUrlParser:true,useCreateIndex:true},()=>{
    console.log('mongodb connected');
})


const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/rest',require('./routes/routes'));

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server started');
});