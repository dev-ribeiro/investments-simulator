const mongoose = require('mongoose');

const ratesSchema = new mongoose.Schema({
    name:{type:String},
    category:{type:String},
    rate:{type:Number}
});

const Rates = new mongoose.model('Rates',ratesSchema);

module.exports = Rates