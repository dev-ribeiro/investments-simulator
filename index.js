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
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;
const permissions = process.env.DB_PERMISSIONS;
const url = `mongodb+srv://${user}:${password}@${name}.ebuav.mongodb.net/?${permissions}`;
mongoose.connect(url);
let db = mongoose.connection;
db.on('error',()=>{console.log('Error')});
db.once('open',()=>{console.log('Mongo DB connected\n')});