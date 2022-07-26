const mongoose = require('mongoose');

const stockExchangeModel = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String },
    profit: { type: Array, required: true },
    pop: { type: Array, required: true } // Price Over Profit
});

module.exports = mongoose.model('Exchange', stockExchangeModel);