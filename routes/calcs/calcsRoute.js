const express = require('express');
const router = express.Router();
const calcYield = require('../../controllers/calcs/calcYield')

router.post('/simulation',express.json(),calcYield)

module.exports = router