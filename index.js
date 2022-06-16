require('dotenv').config()
const express = require('express');
const app = express();
const calcsRoute = require('./routes/calcs/calcsRoute');

app.use('/api',calcsRoute);

app.listen(process.env.PORT,(err)=>{
    if(!err) console.log('Server running on port',process.env.PORT)
})