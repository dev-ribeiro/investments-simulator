const mongoose = require('mongoose');

const ratesSchema = new mongoose.Schema({
    name:{type:String},
    category:{type:String},
    rate:{type:Number}
});

module.exports = mongoose.model('Rates',ratesSchema);