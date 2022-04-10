const calc = {
    calcYield: function (c, r, t) { return c * (r / 100) * t },
    calcAmount: function (c, r, t) { return c * (1 + ((r / 100) * t)) }
}

async function calculateYield(req,res){
    let result = await calc.calcYield(req.body.capital,req.body.rate,req.body.time);
    res.send(result)
}

module.exports = calculateYield