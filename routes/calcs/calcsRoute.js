const express = require('express');
const router = express.Router();
const calcYield = require('../../service/calcs/calcs')

router.post('/yield',express.json(),calcYield.calculateYield);
router.post('/amount',express.json(),calcYield.calculateAmount)

module.exports = router