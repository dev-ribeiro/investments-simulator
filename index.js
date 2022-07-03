// Dependencies
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Routes
const calcsRoute = require('./routes/handleCalcs/handleCalcsRoute');

// Application
app.use('/api/calcs', calcsRoute);

//Server
const PORT = process.env.PORT || 3334;
app.listen(PORT, (err) => {
    if (!err) console.log('Server running on port ', PORT)
});

//Database
const url = process.env.URL;
mongoose.connect(url);
let db = mongoose.connection;
db.on('error',()=>{console.log('Error')});
db.once('open',()=>{console.log('Mongo DB connected')})