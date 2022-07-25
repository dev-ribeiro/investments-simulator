const express = require('express');
const router = express.Router();
const ratesController = require('../service/controllers/ratesController');

router.get('/',ratesController.allRates);

module.exports = router