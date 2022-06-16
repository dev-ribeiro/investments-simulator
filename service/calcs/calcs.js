const calc = {
    calcYield: function (c, r, t) { return c * (r / 100) * t },
    calcAmount: function (c, r, t) { return c * (1 + ((r / 100) * t)) }
};

async function calculateYield(req, res) {
    let doc = await req.body
    let result = calc.calcYield(doc.capital,doc.rate,doc.time);
    res.status(200).send(result.toFixed(2).toString())
};

async function calculateAmount(req, res) {
    let doc = await req.body
    let result = calc.calcAmount(doc.capital,doc.rate,doc.time);
    res.status(200).send(result.toFixed(2).toString())
};

module.exports = { calculateYield, calculateAmount }