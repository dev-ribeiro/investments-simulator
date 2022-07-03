const router = require('express').Router();
const ratesController = require('../../service/controllers/ratesController');

router.get('/',ratesController.allRates);

module.exports = router