// Dependencies
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();

// Routes
const apresentationRoute = require('./routes/apresentationRouter/apresentationRouter');
const calcsRoute = require('./routes/handleCalcsRouter/handleCalcsRoute');
const ratesRoute = require('./routes/ratesRouter/ratesRouter');

// Application
app.use(cors())
app.use('/',apresentationRoute);
app.use('/api/calcs', calcsRoute);
app.use('/api/rates',ratesRoute);

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
db.once('open',()=>{console.log('Mongo DB connected')});