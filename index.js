require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const apiRoute = require('./routes/apiRoute');

app.use('/api',apiRoute);

app.listen(process.env.PORT,(err)=>{
    if(!err) console.log('Server running on port',process.env.PORT)
})