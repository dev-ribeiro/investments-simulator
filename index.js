require('dotenv').config()
const express = require('express');
const app = express();
const calcsRoute = require('./routes/calcs/calcsRoute');
const acessRatesRoutes = require('./routes/rates/acessRatesRoutes');

app.use('/api',calcsRoute);
app.use('/api',acessRatesRoutes);

app.listen(3444,(err)=>{
    if(!err) console.log('Server running on port 3444')
})