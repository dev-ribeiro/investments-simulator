const express = require('express');
const router = express.Router();
const calcYield = require('../../controllers/calcs/calcs')

router.post('/simulation/yield',express.json(),calcYield.calculateYield);
router.post('/simulation/amount',express.json(),calcYield.calculateAmount)

module.exports = router