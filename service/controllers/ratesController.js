const express = require("express");
const ratesModel = require("../models/ratesModel");

const allRates = async (req, res) => {
    try {
        let docs = await ratesModel.find();
        res.send(`${docs}`);
    } catch (error) {
        res.send(error)
    };
};

module.exports = { allRates }