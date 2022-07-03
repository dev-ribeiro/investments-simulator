// Dependencies
require('dotenv').config()
const express = require('express');
const app = express();

// Routes
const calcsRoute = require('./routes/handleCalcs/handleCalcsRoute');

// Application
app.use('/api/calcs', calcsRoute);
app.get('/',(req,res)=>{
    res.send(<h1>Hello World!</h1>)
})

//Server
const PORT = process.env.PORT || 3334;
app.listen(PORT, (err) => {
    if (!err) console.log('Server running on port ', PORT)
})