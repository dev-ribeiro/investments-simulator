const express = require("express");
const ratesModel = require("../models/ratesModel");

const allRates = async (req, res) => {
    try {
        let docs = await ratesModel.find();
        console.log(docs);
        res.send('Sucessfull');
    } catch (error) {
        res.send(error)
    };
};

module.exports = { allRates }