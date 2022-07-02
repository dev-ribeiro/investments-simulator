// Dependencies
require('dotenv').config()
const express = require('express');
const app = express();

// Routes
const calcsRoute = require('./routes/handleCalcs/handleCalcsRoute');

// Application
app.use('/api',calcsRoute);

//Server
app.listen(3444,(err)=>{
    if(!err) console.log('Server running on port 3444')
})