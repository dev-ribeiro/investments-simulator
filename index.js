// Dependencies
require('dotenv').config()
const express = require('express');
const app = express();

// Routes
const calcsRoute = require('./routes/handleCalcs/handleCalcsRoute');

// Application
app.use('/api', calcsRoute);

//Server
const PORT = process.env.PORT || 3334;
app.listen(PORT, (err) => {
    if (!err) console.log('Server running on port ', PORT)
})