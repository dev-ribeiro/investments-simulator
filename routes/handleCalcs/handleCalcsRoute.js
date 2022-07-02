const express = require('express');
const router = express.Router();
const calcYield = require('../../service/handleCalcs/handleCalcs')

router.post('/yield',express.json(),calcYield.calculateYield);
router.post('/amount',express.json(),calcYield.calculateAmount)

module.exports = router