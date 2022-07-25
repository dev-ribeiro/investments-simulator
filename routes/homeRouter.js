const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('https://dev-ribeiro.github.io/investments-simulator/');
});

module.exports = router