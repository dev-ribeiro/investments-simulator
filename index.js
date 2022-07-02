require('dotenv').config()
const express = require('express');
const app = express();
const calcsRoute = require('./routes/calcs/calcsRoute');

app.use('/api',calcsRoute);

app.listen(3444,(err)=>{
    if(!err) console.log('Server running on port 3444')
})